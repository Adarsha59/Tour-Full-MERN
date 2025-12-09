import { useEffect, useState } from "react";
import QuillBox from "../../../components/QuillEditor";
import { getAllCategoriesApi } from "../../../api/categoryApi";

function updateDeep(obj, path, value) {
  const keys = Array.isArray(path) ? path : path.split(".");
  const clone = { ...obj };
  let cur = clone;

  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    cur[k] = cur[k] ? { ...cur[k] } : {};
    cur = cur[k];
  }

  cur[keys[keys.length - 1]] = value;
  return clone;
}

export default function PackageTabsForm({ form, setForm, onSubmit, mode }) {
  const [tab, setTab] = useState("basic");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const loadCats = async () => {
      const res = await getAllCategoriesApi();
      setCategories(res.data);
    };

    loadCats();
  }, []);

  const input = (label, path, type = "text") => (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-gray700 dark:text-gray300">
        {label}
      </label>
      <input
        type={type}
        value={path.split(".").reduce((a, k) => (a ? a[k] : ""), form) || ""}
        onChange={(e) => setForm((f) => updateDeep(f, path, e.target.value))}
        className="p-3 rounded border border-gray300 dark:border-gray600 bg-gray50 dark:bg-[#2b2b2b] text-gray900 dark:text-gray100"
      />
    </div>
  );

  const tabs = [
    { id: "basic", label: "Basic info" },
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
    { id: "facts", label: "Key facts" },
    { id: "cost", label: "Cost details" },
    { id: "addons", label: "Add ons" },
    { id: "departures", label: "Departures" },
    { id: "gallery", label: "Gallery" },
    { id: "price", label: "Price" },
  ];

  return (
    <div className="max-w-6xl mx-auto pb-16">
      <h2 className="text-3xl font-bold mb-6 text-gray900 dark:text-gray100">
        {mode === "edit" ? "Edit Package" : "Create Package"}
      </h2>

      <div className="flex gap-2 mb-6 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-full text-sm border whitespace-nowrap ${
              tab === t.id
                ? "bg-primary text-white border-primary"
                : "bg-white dark:bg-[#2b2b2b] text-gray700 dark:text-gray200 border-gray300 dark:border-gray600"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl bg-white dark:bg-[#242424] border border-gray200 dark:border-gray700 p-6 shadow space-y-6">
        {/* BASIC */}
        {tab === "basic" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {input("Title", "title")}

            {/* CATEGORY DROPDOWN */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray700 dark:text-gray300">
                Category
              </label>
              <select
                value={form.category}
                onChange={(e) =>
                  setForm((p) => ({ ...p, category: e.target.value }))
                }
                className="p-3 rounded border border-gray300 dark:border-gray600 bg-gray50 dark:bg-[#2b2b2b] text-gray900 dark:text-gray100"
                required
              >
                <option value="">Select category</option>

                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.title}
                  </option>
                ))}
              </select>
            </div>

            {input("Tripadvisor reviews", "rating.tripadvisor_reviews")}
            {input("Banner image URL", "banner_image")}
          </div>
        )}

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div className="space-y-6">
            <EditorBox
              label="Summary"
              value={form.overview.summary}
              onChange={(v) =>
                setForm((p) => ({
                  ...p,
                  overview: { ...p.overview, summary: v },
                }))
              }
            />

            <EditorBox
              label="Highlights"
              value={form.overview.highlights}
              onChange={(v) =>
                setForm((p) => ({
                  ...p,
                  overview: { ...p.overview, highlights: v },
                }))
              }
            />

            <EditorBox
              label="Why choose this trek"
              value={form.overview.why_ebc}
              onChange={(v) =>
                setForm((p) => ({
                  ...p,
                  overview: { ...p.overview, why_ebc: v },
                }))
              }
            />

            <EditorBox
              label="What to expect"
              value={form.overview.what_to_expect}
              onChange={(v) =>
                setForm((p) => ({
                  ...p,
                  overview: { ...p.overview, what_to_expect: v },
                }))
              }
            />

            <EditorBox
              label="Distances"
              value={form.overview.distances}
              onChange={(v) =>
                setForm((p) => ({
                  ...p,
                  overview: { ...p.overview, distances: v },
                }))
              }
            />
          </div>
        )}

        {/* ITINERARY */}
        {tab === "itinerary" && (
          <EditorBox
            label="Itinerary (paste full day wise plan)"
            value={form.itinerary}
            onChange={(v) => setForm((p) => ({ ...p, itinerary: v }))}
          />
        )}

        {/* KEY FACTS */}
        {tab === "facts" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {input("Duration", "key_facts.duration")}
            {input("Trip grade", "key_facts.trip_grade")}
            {input("Country", "key_facts.country")}
            {input("Max altitude", "key_facts.max_altitude")}
            {input("Group size", "key_facts.group_size")}
            {input("Starts", "key_facts.starts")}
            {input("Ends", "key_facts.ends")}
            {input("Activities", "key_facts.activities")}
            {input("Best time", "key_facts.best_time")}
          </div>
        )}

        {/* COST DETAILS */}
        {tab === "cost" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EditorBox
              label="Cost includes"
              value={form.cost_details.includes}
              onChange={(v) =>
                setForm((p) => ({
                  ...p,
                  cost_details: { ...p.cost_details, includes: v },
                }))
              }
            />

            <EditorBox
              label="Cost excludes"
              value={form.cost_details.excludes}
              onChange={(v) =>
                setForm((p) => ({
                  ...p,
                  cost_details: { ...p.cost_details, excludes: v },
                }))
              }
            />
          </div>
        )}

        {/* ADD ONS */}
        {tab === "addons" && (
          <EditorBox
            label="Add ons"
            value={form.add_ons}
            onChange={(v) => setForm((p) => ({ ...p, add_ons: v }))}
          />
        )}

        {/* DEPARTURES */}
        {tab === "departures" && (
          <EditorBox
            label="Departures (paste group dates)"
            value={form.departures}
            onChange={(v) => setForm((p) => ({ ...p, departures: v }))}
          />
        )}

        {/* GALLERY */}
        {/* GALLERY */}
        {tab === "gallery" && (
          <div className="space-y-6">
            <div className="flex justify-between">
              <h3 className="font-semibold text-lg">Gallery</h3>
              <button
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    gallery: [
                      ...(prev.gallery || []),
                      { caption: "", image: "" },
                    ],
                  }))
                }
                className="px-4 py-2 bg-primary text-white rounded text-sm"
              >
                Add Image
              </button>
            </div>

            {(form.gallery || []).map((g, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-gray300 dark:border-gray700 bg-white dark:bg-[#1f1f1f] shadow-sm space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Caption */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold">Caption</label>
                    <input
                      value={g.caption}
                      onChange={(e) => {
                        const arr = [...form.gallery];
                        arr[idx].caption = e.target.value;
                        setForm({ ...form, gallery: arr });
                      }}
                      className="p-3 rounded border border-gray300 dark:border-gray600 bg-gray50 dark:bg-[#2b2b2b]"
                      placeholder="Photo caption"
                    />
                  </div>

                  {/* Image URL */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold">Image URL</label>
                    <input
                      value={g.image}
                      onChange={(e) => {
                        const arr = [...form.gallery];
                        arr[idx].image = e.target.value;
                        setForm({ ...form, gallery: arr });
                      }}
                      className="p-3 rounded border border-gray300 dark:border-gray600 bg-gray50 dark:bg-[#2b2b2b]"
                      placeholder="Image URL"
                    />
                  </div>
                </div>

                {/* Preview + Remove */}
                <div className="flex items-center justify-between">
                  {g.image ? (
                    <img
                      src={g.image}
                      className="w-28 h-20 object-cover rounded border border-gray300 dark:border-gray600"
                    />
                  ) : (
                    <div className="text-gray500 text-sm">No preview</div>
                  )}

                  <button
                    onClick={() => {
                      const arr = [...form.gallery];
                      arr.splice(idx, 1);
                      setForm({ ...form, gallery: arr });
                    }}
                    className="px-4 py-2 bg-red-600 text-white rounded text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PRICE SECTION */}
        {/* PRICE */}
        {tab === "price" && (
          <div className="space-y-10">
            {/* Price per person */}
            <div className="p-6 rounded-xl border border-gray300 dark:border-gray700 bg-white dark:bg-[#1f1f1f] shadow space-y-4">
              <h3 className="font-semibold text-lg">Price Per Person</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {input(
                  "Current Price",
                  "price_section.price_per_person.current_price"
                )}
                {input("Old Price", "price_section.price_per_person.old_price")}
                {input("Currency", "price_section.price_per_person.currency")}
              </div>
            </div>

            {/* Group discount section */}
            <div className="p-6 rounded-xl border border-gray300 dark:border-gray700 bg-white dark:bg-[#1f1f1f] shadow space-y-6">
              <h3 className="font-semibold text-lg">Group Discount Pricing</h3>

              {(form.price_section.group_discount_price || []).map(
                (row, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-gray300 dark:border-gray700 rounded-lg bg-gray50 dark:bg-[#2b2b2b] space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Group Size */}
                      <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold">
                          Group size
                        </label>
                        <input
                          value={row.group_size}
                          placeholder="Example: 2 to 4 pax"
                          onChange={(e) => {
                            const list = [
                              ...form.price_section.group_discount_price,
                            ];
                            list[idx].group_size = e.target.value;
                            setForm({
                              ...form,
                              price_section: {
                                ...form.price_section,
                                group_discount_price: list,
                              },
                            });
                          }}
                          className="p-3 rounded border border-gray300 dark:border-gray600 bg-white dark:bg-[#2b2b2b]"
                        />
                      </div>

                      {/* Price per person */}
                      <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold">
                          Price per person
                        </label>
                        <input
                          value={row.price_per_person}
                          placeholder="Example: 1399"
                          onChange={(e) => {
                            const list = [
                              ...form.price_section.group_discount_price,
                            ];
                            list[idx].price_per_person = e.target.value;
                            setForm({
                              ...form,
                              price_section: {
                                ...form.price_section,
                                group_discount_price: list,
                              },
                            });
                          }}
                          className="p-3 rounded border border-gray300 dark:border-gray600 bg-white dark:bg-[#2b2b2b]"
                        />
                      </div>
                    </div>

                    {/* Remove */}
                    <div className="flex justify-end">
                      <button
                        onClick={() => {
                          setForm({
                            ...form,
                            price_section: {
                              ...form.price_section,
                              group_discount_price:
                                form.price_section.group_discount_price.filter(
                                  (_, i) => i !== idx
                                ),
                            },
                          });
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )
              )}

              {/* Add Row */}
              <button
                onClick={() => {
                  setForm({
                    ...form,
                    price_section: {
                      ...form.price_section,
                      group_discount_price: [
                        ...(form.price_section.group_discount_price || []),
                        { group_size: "", price_per_person: "" },
                      ],
                    },
                  });
                }}
                className="px-6 py-2 bg-primary text-white rounded text-sm"
              >
                Add Group Row
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="pt-6 flex justify-end">
        <button
          onClick={onSubmit}
          className="px-8 py-3 rounded-lg bg-primary text-white font-semibold shadow hover:opacity-90"
        >
          Save package
        </button>
      </div>
    </div>
  );
}

function EditorBox({ label, value, onChange }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">{label}</h3>
      <QuillBox value={value || ""} onChange={onChange} />
    </div>
  );
}
