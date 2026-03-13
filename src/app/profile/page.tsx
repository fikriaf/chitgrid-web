"use client";

import { motion } from "framer-motion";
import { Wallet, Shield, Trophy, Grid3X3, Clock, Settings } from "lucide-react";
import { formatAddress } from "@/lib/utils";

const mockProfile = {
  agent_name: "MyAgent_01",
  wallet_address: "0x742d35Cc6634C0532925a3b844Bc9e7595f2b3e1",
  reputation_score: 2450,
  rank: "Rising Star",
  member_since: "2026-01-15",
  active_grids: 3,
  completed_grids: 9,
  total_winnings: 8.5,
  total_contributed: 15.2,
};

const myGrids = [
  { id: "1", name: "Saver Squad Alpha", role: "Creator", contribution: 0.1, state: "active", next_payout: "2026-03-19" },
  { id: "2", name: "DeFi Builders", role: "Member", contribution: 1, state: "active", next_payout: "2026-03-21" },
  { id: "3", name: "Community Fund", role: "Member", contribution: 0.5, state: "open", next_payout: "TBD" },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="flex flex-col sm:flex-row items-start gap-6 p-8 bg-surface rounded-3xl border border-border-subtle">
            <div className="shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-4xl font-display font-bold text-background">{mockProfile.agent_name.charAt(0)}</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="font-display text-3xl font-bold mb-2">{mockProfile.agent_name}</h1>
                  <div className="flex items-center gap-3 text-muted-foreground mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-lg text-sm font-medium">
                      <Shield className="w-4 h-4" />{mockProfile.rank}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Wallet className="w-4 h-4" />
                      <span className="font-mono text-sm">{formatAddress(mockProfile.wallet_address)}</span>
                    </span>
                  </div>
                </div>
                <button className="p-2 bg-surface-elevated rounded-lg border border-border-subtle hover:border-border transition-colors">
                  <Settings className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3 bg-surface-elevated rounded-xl">
                  <p className="text-muted-foreground text-xs mb-1">Reputation</p>
                  <p className="font-display font-bold text-xl text-primary">{mockProfile.reputation_score.toLocaleString()}</p>
                </div>
                <div className="p-3 bg-surface-elevated rounded-xl">
                  <p className="text-muted-foreground text-xs mb-1">Active Grids</p>
                  <p className="font-display font-bold text-xl">{mockProfile.active_grids}</p>
                </div>
                <div className="p-3 bg-surface-elevated rounded-xl">
                  <p className="text-muted-foreground text-xs mb-1">Completed</p>
                  <p className="font-display font-bold text-xl">{mockProfile.completed_grids}</p>
                </div>
                <div className="p-3 bg-surface-elevated rounded-xl">
                  <p className="text-muted-foreground text-xs mb-1">Winnings</p>
                  <p className="font-display font-bold text-xl text-secondary">{mockProfile.total_winnings} DOT</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* My Grids */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold">My Grids</h2>
            <button className="text-primary hover:text-primary-hover text-sm font-medium">Create new</button>
          </div>
          <div className="space-y-3">
            {myGrids.map((grid, index) => (
              <motion.div key={grid.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + index * 0.05 }} className="group p-5 bg-surface rounded-2xl border border-border-subtle hover:border-border transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Grid3X3 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{grid.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="px-2 py-0.5 bg-surface-elevated rounded text-xs">{grid.role}</span>
                        <span>{grid.contribution} DOT</span>
                        <span className={`px-2 py-0.5 rounded text-xs ${grid.state === "active" ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"}`}>{grid.state}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground mb-1">Next payout</p>
                    <p className="font-mono text-sm">{grid.next_payout}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-12 p-6 bg-surface rounded-2xl border border-border-subtle">
          <h2 className="font-display text-xl font-bold mb-6">Activity Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Trophy className="w-5 h-5 text-primary" /></div>
              <div><p className="text-muted-foreground text-sm">Total Winnings</p><p className="font-display font-bold text-lg">{mockProfile.total_winnings} DOT</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center"><Clock className="w-5 h-5 text-secondary" /></div>
              <div><p className="text-muted-foreground text-sm">Total Contributed</p><p className="font-display font-bold text-lg">{mockProfile.total_contributed} DOT</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center"><Shield className="w-5 h-5 text-accent" /></div>
              <div><p className="text-muted-foreground text-sm">Member Since</p><p className="font-display font-bold text-lg">{new Date(mockProfile.member_since).toLocaleDateString()}</p></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
