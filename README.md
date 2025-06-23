# trading-bot

This project is an automated trading bot created with [Bun](https://bun.sh), a fast all-in-one JavaScript runtime. The bot monitors cryptocurrency market order books and calculates optimal conversion routes between different trading pairs (such as XAI/USDT, USDT/INR, etc.) to identify arbitrage opportunities.

## Features

- Fetches and updates live market depth (order book) data for various trading pairs using the CoinDCX public API.
- Calculates highest bid and lowest ask prices for selected markets.
- Computes how much of a particular asset (e.g., XAI) can be converted into another via multiple trade routes.
- Designed for quick experimentation and extension.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.1.32 or newer

### Installation

To install dependencies:

```bash
bun install
```

### Running the Bot

To start the trading bot:

```bash
bun run index.ts
```

*(Note: The original README had a typo in the run command; the main script is likely `index.ts`.)*

## Project Structure

- `index.ts` — Main entry point; sets up managers for different trading pairs, fetches order book data, and prints conversion calculations.
- `DepthManager.ts` — Handles polling the market depth for a given pair and exposes utilities to get relevant bid/ask prices.

## Example Output

The bot periodically outputs conversion calculations for various trading routes such as:

```
You can convert 1 XAI into <amount> XAI
```

## Customization

You can extend the bot by adding more trading pairs or implementing actual trade execution logic.

## License

MIT License

---

This project was created using `bun init` in Bun v1.1.32.
