import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPackageByIdApi, updatePackageApi } from "../../../api/packageApi";
import PackageTabsForm from "./PackageTabsForm";

export default function PackageEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const load = async () => {
      const res = await getPackageByIdApi(id);

      // Ensure missing fields do not break editor
      const data = res.data.data;
      data.category = data.category?._id || data.category || "";

      data.price_section = data.price_section || {
        price_per_person: { current_price: 0, old_price: 0, currency: "USD" },
        group_discount_price: [],
      };

      if (!data.price_section.price_per_person) {
        data.price_section.price_per_person = {
          current_price: 0,
          old_price: 0,
          currency: "USD",
        };
      }

      if (!data.price_section.group_discount_price) {
        data.price_section.group_discount_price = [];
      }

      setForm(data);
    };

    load();
  }, [id]);

  const handleSubmit = async () => {
    await updatePackageApi(id, form);
    navigate("/admin/packages");
  };

  if (!form) return <p className="text-lg">Loading...</p>;

  return (
    <PackageTabsForm
      form={form}
      setForm={setForm}
      onSubmit={handleSubmit}
      mode="edit"
    />
  );
}
