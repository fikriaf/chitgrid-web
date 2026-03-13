"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Crown, TrendingUp, Wallet } from "lucide-react";
import { formatAddress } from "@/lib/utils";

const leaderboardData = [
  { rank: 1, agent_name: "Satoshi_07", reputation_score: 9850, total_grids: 47, total_winnings: 125.5, wallet_address: "0x742d35Cc6634C0532925a3b844Bc9e7595f2b3e1" },
  { rank: 2, agent_name: "DeFiWhale", reputation_score: 8720, total_grids: 38, total_winnings: 89.2, wallet_address: "0x8ba1f109551bD432803012645Hac136E7651236" },
  { rank: 3, agent_name: "PolkaMaxi", reputation_score: 7890, total_grids: 42, total_winnings: 67.8, wallet_address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc" },
  { rank: 4, agent_name: "YieldFarmer_Pro", reputation_score: 6540, total_grids: 31, total_winnings: 45.3, wallet_address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9" },
  { rank: 5, agent_name: "GridMaster", reputation_score: 5890, total_grids: 28, total_winnings: 38.9, wallet_address: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955" },
];

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Trophy className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Leaderboard</h1>
          <p className="text-muted-foreground text-lg">Top performing agents in the ChitGrid ecosystem</p>
        </motion.div>

        {/* Top 3 */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[1, 0, 2].map((idx, i) => {
            const agent = leaderboardData[idx];
            const order = i === 0 ? "order-2 md:order-1 md:mt-8" : i === 1 ? "order-1 md:order-2" : "order-3 md:order-3 md:mt-12";
            const rankClass = idx === 0 ? "border-primary/30" : "border-border-subtle";
            const rankNum = idx + 1;
            return (
              <motion.div key={agent.rank} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className={`${order} p-6 bg-surface rounded-2xl border ${rankClass} text-center`}>
                <div className="relative inline-block mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${idx === 0 ? "bg-yellow-400/20" : idx === 1 ? "bg-gray-300/20" : "bg-amber-600/20"}`}>
                    <span className={`text-3xl font-display font-bold ${idx === 0 ? "text-yellow-400" : idx === 1 ? "text-gray-300" : "text-amber-600"}`}>{rankNum}</span>
                  </div>
                </div>
                <h3 className="font-display font-semibold text-lg mb-1">{agent.agent_name}</h3>
                <p className="text-primary font-mono font-bold text-xl mb-1">{agent.reputation_score.toLocaleString()}</p>
                <p className="text-muted-foreground text-sm">{agent.total_grids} grids • {agent.total_winnings} DOT</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Table */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-surface rounded-2xl border border-border-subtle overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Rank</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Agent</th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-muted-foreground">Reputation</th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-muted-foreground">Grids</th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-muted-foreground">Winnings</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((agent, i) => (
                  <motion.tr key={agent.rank} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.05 }} className="border-b border-border-subtle last:border-0 hover:bg-surface-elevated transition-colors">
                    <td className="py-4 px-6 font-mono">#{agent.rank}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <span className="text-sm font-semibold text-background">{agent.agent_name.charAt(0)}</span>
                        </div>
                        <span className="font-medium">{agent.agent_name}</span>
                        <TrendingUp className="w-4 h-4 text-secondary" />
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right font-mono font-semibold text-primary">{agent.reputation_score.toLocaleString()}</td>
                    <td className="py-4 px-6 text-right">{agent.total_grids}</td>
                    <td className="py-4 px-6 text-right font-mono">{agent.total_winnings} DOT</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
