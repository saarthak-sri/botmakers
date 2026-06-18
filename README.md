# BOTLEAGUE | India's Ultimate Robotics Arena

BOTLEAGUE is a premium, high-performance landing page representing the national ecosystem for robotics competition championships in India. Designed with a futuristic dark-sci-fi aesthetic, the platform supports visual brackets, structured journey steppers, live scores, and participant roles.

## 🚀 Live Site
Check out the live deployment here:  
👉 **[https://saarthak-sri.github.io/botmakers/](https://saarthak-sri.github.io/botmakers/)**

---

## 🛠️ Tech Stack
- **Core**: React (v19) + TypeScript
- **Styling**: Tailwind CSS (v4)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages (`gh-pages` wrapper)

---

## ✨ Features
1. **Interactive Hero Section**: Showcases live regionals stream status and highlights key national stats.
2. **Championship Bracket**: Real-time interactive match nodes displaying Semifinal/Final scores, dynamic telemetry logs, and tournament progress.
3. **League Stepper Roadmap**: Custom visual timeline detailing the user journey from building a team to major league entry.
4. **Platform Features**: Highlights structured events, national benchmarked ranks, digital identities on the chain, and direct career paths.
5. **Competition Disciplines**: Visual sports grid showcasing disciplines such as Robo War, FPV Drones, Line Follower, RC Racing, and Robo Hockey.
6. **Live Leaderboard**: Scoreboard widget that simulates real-time battle XP adjustments.
7. **Ecosystem Applications**: Validation-integrated signups for Judges, Volunteers, and Members.
8. **Sponsor Matrix**: Clean monochrome alignment of institutional partners (IITs, NITs, Delhivery, General Robotics, etc.).

---

## 💻 Local Development

### 1. Clone the repository and navigate inside:
```bash
git clone https://github.com/saarthak-sri/botmakers.git
cd botmakers
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Run the development server:
```bash
npm run dev
```
Open **[http://localhost:5173/botmakers/](http://localhost:5173/botmakers/)** in your browser.

### 4. Build for production:
```bash
npm run build
```

---

## 📦 Deployment to GitHub Pages
The project includes a pre-configured GitHub Pages pipeline. To publish the latest code:

```bash
npm run deploy
```
*Note: This will automatically execute `npm run build` beforehand to verify TypeScript strict types compile and generate assets under the correct subfolder base path.*
