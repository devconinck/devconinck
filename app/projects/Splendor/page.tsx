"use client";
import React from "react";

const SplendorInfo: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>About Splendor</h1>
      <p>
        Splendor is a multiplayer board game designed by Marc André and
        published by Space Cowboys. The game is set during the Renaissance
        period, where players take on the role of wealthy merchants trying to
        acquire mines, transportation methods, and artisans to produce beautiful
        gems and jewelry.
      </p>
      <h2>Game Objective</h2>
      <p>
        The objective of the game is to collect the most prestige points by
        acquiring development cards and attracting noble patrons. Players take
        turns collecting gem tokens and purchasing development cards that
        provide bonuses and points.
      </p>
      <h2>How to Play</h2>
      <ul>
        <li>Collect gem tokens to purchase development cards.</li>
        <li>Use development cards to gain bonuses and prestige points.</li>
        <li>Attract noble patrons for additional points.</li>
        <li>The game ends when a player reaches 15 prestige points.</li>
      </ul>
    </div>
  );
};

export default SplendorInfo;
