import { useQuery } from "@tanstack/react-query"

export const useApps = () => {
    return useQuery({
        queryKey: ["apps"],
        queryFn: async () => {
            const res = await fetch("/apps.json");
            if (!res.ok) throw new Error("Failed to fetch app!");
            const data = await res.json();
            return data;
        },
        staleTime: 1000 * 60 * 5
    })
}

export const useSingleApp=(id)=>{
    return useQuery({
        queryKey: ["apps", id],
        queryFn: async()=>{
            const res = await fetch("/apps.json");
            if(!res.ok) throw new Error("Failed to fetch app!");
            const apps = await res.json();
            const app = apps.find(ap=>ap.id == id);
            if(!app) throw new Error("App is not found");
            return app;
        },
        enabled: !!id,
        staleTime: 1000 *60 *5
    })
}