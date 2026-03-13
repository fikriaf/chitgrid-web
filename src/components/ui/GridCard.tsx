"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Users, ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";

type Grid = {
  grid_id: string;
  name: string;
  contribution_dot: number;
  total_slots: number;
  slots_filled: number;
  interval: "weekly" | "biweekly" | "monthly";
  state: "open" | "active" | "completed";
};

interface GridCardProps {
  grid: Grid;
}

export function GridCard({ grid }: GridCardProps) {
  const slotsRemaining = grid.total_slots - grid.slots_filled;
  const fillPercentage = (grid.slots_filled / grid.total_slots) * 100;

  const intervalLabels = {
    weekly: "Weekly",
    biweekly: "Bi-weekly",
    monthly: "Monthly",
  };

  const stateColors = {
    open: "bg-secondary/10 text-secondary border-secondary/20",
    active: "bg-primary/10 text-primary border-primary/20",
    completed: "bg-muted/10 text-muted border-muted/20",
  };

  return (
    <Link href={`/grids/${grid.grid_id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        className="group h-full p-6 bg-surface rounded-2xl border border-border-subtle hover:border-border transition-all cursor-pointer"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <span className={clsx("inline-block px-2 py-0.5 text-xs font-medium rounded-md border mb-3", stateColors[grid.state])}>
              {grid.state.charAt(0).toUpperCase() + grid.state.slice(1)}
            </span>
            <h3 className="font-display font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
              {grid.name}
            </h3>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity -mt-1 -mr-1" />
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4" /> Slots
            </span>
            <span className="font-mono font-medium">{grid.slots_filled}/{grid.total_slots}</span>
          </div>
          <div className="h-1.5 bg-surface-elevated rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${fillPercentage}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <Clock className="w-4 h-4" /> Interval
            </span>
            <span className="font-medium">{intervalLabels[grid.interval]}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-border-subtle">
          <div className="flex items-baseline justify-between">
            <span className="text-muted-foreground text-sm">Contribution</span>
            <span className="font-display font-bold text-xl text-primary">
              {grid.contribution_dot} <span className="text-sm font-normal text-muted-foreground">DOT</span>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
