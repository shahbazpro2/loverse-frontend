"use client";
import useSWR from "swr";
import { Axios } from "use-hook-api";
let token: string | null = null;
if (typeof window !== "undefined" && window.localStorage) {
  token = localStorage.getItem("token");
}
Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
function useMe() {
  const swrfetcher = (url: string) => Axios.get(url).then((res) => res.data);
  return useSWR("/users/me/", swrfetcher);
}

export default useMe;
