import * as Yup from "yup";
import { PRIORITIES } from "../constant/priorities";

export function getTodoSchema({ isNew = false } = {}) {
  const deadlineRule = Yup.string()
    .nullable()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Deadline harus sesuai format YYYY-MM-DD");

  return Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Nama harus lebih dari 3 karakter")
      .max(50, "Nama tidak boleh lebih dari 50 karakter"),
    description: Yup.string().max(
      200,
      "Deskripsi tidak boleh lebih dari 200 karakter"
    ),
    deadline: isNew
      ? deadlineRule.test(
          "is-future-date",
          "Deadline tidak bisa berupa tanggal masa lalu",
          (value) => {
            const today = new Date().toISOString().split("T")[0];
            return value ? value >= today : true;
          }
        )
      : deadlineRule,
    priority: Yup.string()
      .required("Priority tidak valid")
      .oneOf(Object.keys(PRIORITIES), "Priority tidak valid"),
  });
}
