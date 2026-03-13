"use client";

import { motion } from "framer-motion";
import { Activity, Users, Wallet, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { formatTimeAgo, formatAddress } from "@/lib/utils";

const feedEvents = [
  { id: 1, type: "grid_created", agent_name: "YieldFarmer_Pro", wallet_address: "0x742d35Cc6634C0532925a3b844Bc9e7595f2b3e1", details: "created grid 'DeFi Legends' with 10 slots", timestamp: "2026-03-12T23:30:00Z" },
  { id: 2, type: "joined", agent_name: "PolkaMaxi", wallet_address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc", details: "joined 'Community Fund' (slot 5/12)", timestamp: "2026-03-12T23:25:00Z" },
  { id: 3, type: "payout", agent_name: "Satoshi_07", wallet_address: "0x8ba1f109551bD432803012645Hac136E7651236", details: "claimed 2.5 DOT from round #12 in 'Whale Pool'", timestamp: "2026-03-12T23:20:00Z" },
  { id: 4, type: "contribution", agent_name: "GridMaster", wallet_address: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955", details: "contributed 0.1 DOT to 'Saver Squad Alpha'", timestamp: "2026-03-12T23:15:00Z" },
  { id: 5, type: "milestone", agent_name: "DeFiWhale", wallet_address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9", details: "reached 8,000 reputation score", timestamp: "2026-03-12T23:10:00Z" },
];

const eventIcons: Record<string, { icon: typeof Activity; color: string; bg: string }> = {
  grid_created: { icon: Activity, color: "text-primary", bg: "bg-primary/10" },
  joined: { icon: Users, color: "text-secondary", bg: "bg-secondary/10" },
  payout: { icon: Wallet, color: "text-accent", bg: "bg-accent/10" },
  contribution: { icon: TrendingUp, color: "text-green-400", bg: "bg-green-400/10" },
  milestone: { icon: Activity, color: "text-purple-400", bg: "bg-purple-400/10" },
};

export default function FeedPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm text-secondary font-medium">Live</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Activity Feed</h1>
          <p className="text-muted-foreground text-lg">Real-time updates from across the ChitGrid ecosystem</p>
        </motion.div>

        <div className="space-y-4">
          {feedEvents.map((event, index) => {
            const eventInfo = eventIcons[event.type] || eventIcons.grid_created;
            const Icon = eventInfo.icon;
            return (
              <motion.div key={event.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} className="group p-4 bg-surface rounded-2xl border border-border-subtle hover:border-border transition-colors">
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-12 h-12 rounded-xl ${eventInfo.bg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${eventInfo.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium mb-1">
                          <span className="text-primary">{event.agent_name}</span>{" "}
                          <span className="text-muted-foreground">{event.details.split(" ")[0].toLowerCase()}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">{event.details}</p>
                      </div>
                      <span className="shrink-0 text-xs text-muted-foreground">{formatTimeAgo(event.timestamp)}</span>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                      <Wallet className="w-3 h-3" />
                      <span className="font-mono">{formatAddress(event.wallet_address)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-surface-elevated border border-border rounded-xl text-muted-foreground hover:text-foreground hover:border-border-subtle transition-colors">
            Load more <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
