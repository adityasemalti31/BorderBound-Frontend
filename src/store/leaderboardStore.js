
import { create } from "zustand";
import api from "@/lib/api";

export const useLeaderboardStore = create((set, get) => ({
  leaderboard: [],
  meta: { totalVotesCast: 0, lastUpdated: null },
  loading: false,
  error: null,
  search: "",
  city: "",

  setSearch: (search) => set({ search }),
  setCity: (city) => set({ city }),

  fetchLeaderboard: async () => {
    try {
      set({ loading: true, error: null });

      const { search, city } = get();
      const params = {};

      if (search) params.search = search;
      if (city) params.city = city;

      const res = await api.get("/leaderboard", { params });

      if (res.data?.success) {
        set({
          leaderboard: res.data.data.leaderboard || [],
          meta: res.data.data.meta || {
            totalVotesCast: 0,
            lastUpdated: null,
          },
          loading: false,
        });
      } else {
        set({
          error: "Failed to fetch leaderboard",
          loading: false,
        });
      }
    } catch (err) {
      set({
        error: err.response?.data?.message || err.message,
        loading: false,
      });
    }
  },
}));
