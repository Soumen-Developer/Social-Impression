<div align="center">
  <h1>🌟 Social Impression</h1>
  <p><strong>A creative ecosystem for independent artists. Production, distribution, marketing, and artist development under one roof.</strong></p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Prisma](https://img.shields.io/badge/Prisma-6.4-2D3748?style=for-the-badge&logo=prisma)](https://prisma.io)
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://postgresql.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
</div>

---

## 📖 Overview

**Social Impression** replaces the group chats, the dropped DMs, and the twelve open tabs with a single, powerful artist dashboard. It bridges the gap between independent artists and the global music industry by providing a unified platform where producers, release managers, and marketing leads collaborate seamlessly. Every deliverable, milestone, and asset lives in one place—with dates attached and your name on the masters.

## ✨ Key Features

- **🎨 Artist Dashboard**: Centralized hub for managing your artist profile, tracking career metrics, and viewing scheduled calls.
- **🚀 Project & Milestone Tracking**: Real-time insights into your ongoing releases, marketing packages, and production deliverables.
- **🗂️ File Management**: Secure, integrated storage for master tracks, cover art, and stems.
- **💳 Payments & Billing**: Seamlessly track packages, memberships, invoices, and payment intents.
- **💬 Support System**: Integrated ticketing system for direct communication with the management and production teams.
- **📝 Applications**: Automated intake pipeline for new artists applying to join the ecosystem.

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18+)
- PostgreSQL Database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Soumen-Developer/Social-Impression.git
   cd Social-Impression
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Copy the example environment file and configure your variables:
   ```bash
   cp .env.example .env
   ```
   *Make sure to update `DATABASE_URL` in your `.env` file to point to your PostgreSQL instance.*

4. **Database Setup**
   Generate the Prisma client and push the schema to your database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🗄️ Database Management

You can easily view and manipulate the database using Prisma Studio:

```bash
npx prisma studio
```
This will open a visual database explorer at `http://localhost:5555`.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Soumen-Developer/Social-Impression/issues).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
