"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { GridCard } from "@/components/ui/GridCard";

const mockGrids = [
  { grid_id: "1", name: "Saver Squad Alpha", contribution_dot: 0.1, total_slots: 8, slots_filled: 5, interval: "weekly" as const, state: "open" as const },
  { grid_id: "2", name: "Polkadot Whales", contribution_dot: 5, total_slots: 5, slots_filled: 2, interval: "monthly" as const, state: "open" as const },
  { grid_id: "3", name: "DeFi Builders", contribution_dot: 1, total_slots: 10, slots_filled: 10, interval: "weekly" as const, state: "active" as const },
  { grid_id: "4", name: "Community Fund", contribution_dot: 0.5, total_slots: 12, slots_filled: 7, interval: "biweekly" as const, state: "open" as const },
  { grid_id: "5", name: "Early Adopters", contribution_dot: 2, total_slots: 6, slots_filled: 6, interval: "monthly" as const, state: "completed" as const },
  { grid_id: "6", name: "Yield Hunters", contribution_dot: 0.25, total_slots: 20, slots_filled: 15, interval: "weekly" as const, state: "active" as const },
];

export default function GridsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredGrids = mockGrids.filter((grid) => {
    const matchesSearch = grid.name.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === "";
    const matchesStatus = statusFilter === "all" || grid.state === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Explore Grids</h1>
          <p className="text-muted-foreground text-lg">Find and join savings grids that match your goals</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input type="text" placeholder="Search grids..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-surface border border-border-subtle rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
          </div>
          <div className="flex flex-wrap gap-2">
            {["all", "open", "active", "completed"].map((filter) => (
              <button key={filter} onClick={() => setStatusFilter(filter)} className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-colors ${statusFilter === filter ? "bg-primary text-background" : "bg-surface-elevated text-muted-foreground hover:text-foreground"}`}>
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-6 text-muted-foreground">
          Showing {filteredGrids.length} grid{filteredGrids.length !== 1 ? "s" : ""}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGrids.map((grid, index) => (
            <motion.div key={grid.grid_id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + index * 0.05 }}>
              <GridCard grid={grid} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
