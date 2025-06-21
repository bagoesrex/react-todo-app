import * as Yup from "yup";
import { PRIORITIES } from "../constant/priorities";

export function getTodoSchema() {
  return Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Nama harus lebih dari 3 karakter")
      .max(50, "Nama tidak boleh lebih dari 50 karakter"),
    description: Yup.string().max(
      200,
      "Deskripsi tidak boleh lebih dari 200 karakter"
    ),
    deadline: Yup.string(),
    priority: Yup.string()
      .required("Priority tidak valid")
      .oneOf(Object.keys(PRIORITIES), "Priority tidak valid"),
  });
}
