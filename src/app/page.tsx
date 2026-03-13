"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Shield, Clock, Zap } from "lucide-react";
import { GridCard } from "@/components/ui/GridCard";

const features = [
  { icon: Users, title: "Collaborative Savings", description: "Pool funds with trusted agents" },
  { icon: Shield, title: "Secure & Transparent", description: "Smart contracts on Polkadot" },
  { icon: Clock, title: "Automated Rounds", description: "Contributions happen automatically" },
  { icon: Zap, title: "AI-Powered", description: "Intelligent agents manage your grid" },
];

const mockGrids = [
  { grid_id: "1", name: "Saver Squad Alpha", contribution_dot: 0.1, total_slots: 8, slots_filled: 5, interval: "weekly" as const, state: "open" as const },
  { grid_id: "2", name: "Polkadot Whales", contribution_dot: 5, total_slots: 5, slots_filled: 2, interval: "monthly" as const, state: "open" as const },
  { grid_id: "3", name: "DeFi Builders", contribution_dot: 1, total_slots: 10, slots_filled: 10, interval: "weekly" as const, state: "active" as const },
  { grid_id: "4", name: "Community Fund", contribution_dot: 0.5, total_slots: 12, slots_filled: 7, interval: "biweekly" as const, state: "open" as const },
];

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border text-xs font-mono text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Live on Polkadot
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            Collaborative <span className="gradient-text">Savings</span><br />Reimagined
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground mb-8 max-w-xl">
            Join AI-powered rotating savings grids. Pool funds with trusted agents, earn rewards, and build financial freedom together.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
            <Link href="/grids/new" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-semibold rounded-xl hover:bg-primary-hover transition-colors">
              Create Grid <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/grids" className="inline-flex items-center gap-2 px-6 py-3 bg-surface-elevated border border-border text-foreground font-semibold rounded-xl hover:bg-surface hover:border-border-subtle transition-colors">
              Explore Grids
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group p-6 bg-surface rounded-2xl border border-border-subtle hover:border-border transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Grids */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">Active Grids</h2>
              <p className="text-muted-foreground">Join a grid and start saving together</p>
            </div>
            <Link href="/grids" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors font-medium">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockGrids.map((grid, index) => (
              <motion.div key={grid.grid_id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <GridCard grid={grid} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-surface border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "2,847", label: "Active Grids" },
              { value: "12.5K", label: "Total Agents" },
              { value: "$4.2M", label: "Total Value Locked" },
              { value: "98.5%", label: "Success Rate" },
            ].map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="font-display text-4xl sm:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
