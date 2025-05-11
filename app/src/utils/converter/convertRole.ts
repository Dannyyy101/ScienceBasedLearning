import {Role} from "@/utils/types/roles.types";

export const convertRole = (role: Role) => {
    switch (role) {
        case "student":
            return "Schüler"
        case "teacher":
            return "Lehrer"
        case "admin":
            return "Administrator"
    }
}