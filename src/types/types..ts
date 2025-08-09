import { useRouter } from "next/navigation";

export interface AuthState {
    LoggedIn: boolean;
    email: string | null;
    userName: string | null;
    userId: string | null;
}
export interface FormProps {
    endOfTheFormTitle?: { text: string, link: string }
    button?: React.ReactNode[]
    handleSubmit: (
        e: React.FormEvent<HTMLFormElement>,
        formData: Record<string, string>,
        router: ReturnType<typeof useRouter>,
    ) => void
    handleGoogleAuth?: () => void,
    inputs: { label: string; type: string; }[]
}
export interface GoogleAuth {
    handleGoogleAuth?: () => void
    button?: React.ReactNode[]
}
export interface DynamicRoutes {
    children: React.ReactNode
}