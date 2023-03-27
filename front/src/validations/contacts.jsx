import * as yup from "yup"

export const formSchemaPostContact = yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().required("O email é obrigatória").email("Email inválido"),
    contact: yup.string().required("O contato é obrigatório")
})