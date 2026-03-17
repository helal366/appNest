import { useQuery, useQueryClient } from "@tanstack/react-query"

const appsStoreKey="apps"

export const useApps = () => {
    return useQuery({
        queryKey: [appsStoreKey],
        queryFn: async () => {
            const res = await fetch("/apps.json");
            if (!res.ok) throw new Error("Failed to fetch app!");
            const data = await res.json();
            localStorage.setItem(appsStoreKey, JSON.stringify(data));
            return data;
        },
        staleTime: 1000 * 60 * 5
    })
}


export const useSingleApp=(id)=>{
    const queryClient = useQueryClient();
    const stringId = String(id);

    const catchApps = queryClient.getQueryData([appsStoreKey]);
    const catchApp = catchApps?.find(cat=>String(cat?.id) === stringId);

    const storedApps = JSON.parse(localStorage.getItem(appsStoreKey) || "null");
    const storedApp= storedApps?.find(ap=>String(ap.id) === stringId);
    return useQuery({
        queryKey: [appsStoreKey, id],
        queryFn: async()=>{
            const res = await fetch("/apps.json");
            if(!res.ok) throw new Error("Failed to fetch app!");
            const apps = await res.json();
            const app = apps.find(ap=>String(ap.id) === stringId);
            if(!app) throw new Error("App is not found");

            queryClient.setQueryData([appsStoreKey], apps);
            localStorage.setItem(appsStoreKey, JSON.stringify(apps));
            return app;
        },
        enabled: !!id && !catchApp && !storedApp,
        initialData: catchApp || storedApp,
        staleTime: 1000 *60 *5,
    })
}