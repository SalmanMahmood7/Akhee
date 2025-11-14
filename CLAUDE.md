# Akhee - Development Guide

## 🚀 STABLE SERVER COMMANDS (NEW & IMPROVED)

### **Primary Commands (Use These)**
```bash
# Standard development (auto-cleans cache)
npm run dev

# Safe restart (kills processes + cleans everything)
npm run dev:safe

# If you're having issues, use the smart server
node scripts/dev-server.js
```

### **Emergency Commands**
```bash
# Full reset (nuclear option)
npm run reset:full

# Quick restart without full reset
npm run restart

# Debug mode with verbose logging
npm run dev:debug
```

### **Health & Maintenance**
```bash
# Check if server is responding
npm run health:check

# Kill any stuck processes
npm run kill:servers

# Clean cache only
npm run clean:cache

# Clean everything
npm run clean:all
```

## 🔧 NEW SMART SERVER FEATURES

### **Auto-Restart Server**
- **File**: `scripts/dev-server.js`
- **Features**:
  - ✅ Auto-restarts on crashes
  - ✅ Health monitoring every 30 seconds  
  - ✅ Intelligent cleanup before restart
  - ✅ Maximum 5 restart attempts
  - ✅ Graceful shutdown on Ctrl+C

### **Enhanced Next.js Config**
- ✅ Optimized webpack for stability
- ✅ Better image handling
- ✅ React strict mode for development
- ✅ Smart caching strategies
- ✅ Enhanced watch options

## 📋 DEVELOPMENT WORKFLOW

### **Starting Development**
1. Use: `npm run dev` (recommended)
2. Or: `node scripts/dev-server.js` (for auto-restart)
3. Wait for "✓ Ready" message (~10-15 seconds)
4. Open: http://localhost:3001

### **Making Changes**
1. ✅ Save your files
2. ✅ Server auto-compiles (1-3 seconds)
3. ✅ Browser auto-refreshes
4. ✅ If stuck, server auto-restarts

### **If Problems Occur**
1. **First try**: `npm run restart`
2. **Still issues?**: `npm run dev:safe`  
3. **Nuclear option**: `npm run reset:full`

## 🛠️ TROUBLESHOOTING

### **Server Won't Start**
```bash
npm run kill:servers
npm run clean:all
npm run dev
```

### **Changes Not Showing**
```bash
# Hard refresh browser: Ctrl+Shift+R
# Or clear and restart:
npm run dev:safe
```

### **Port Already in Use**
```bash
npm run kill:servers
npm run dev
```

### **Complete Reset**
```bash
npm run reset:full
# This will reinstall dependencies and restart
```

## 📊 SERVER STATUS

- **Local**: http://localhost:3001
- **Network**: http://172.23.216.2:3001
- **Health Check**: `npm run health:check`

## 🎯 PERFORMANCE OPTIMIZATIONS

- ✅ **Smart caching** - clears automatically on start
- ✅ **Process monitoring** - kills stuck processes
- ✅ **Auto-restart** - handles crashes gracefully
- ✅ **Fast HMR** - optimized hot module replacement
- ✅ **Memory management** - prevents memory leaks

## 🔥 QUICK COMMANDS CHEAT SHEET

| Command | What it does |
|---------|-------------|
| `npm run dev` | Standard development server |
| `npm run dev:safe` | Safe start (kills + cleans) |
| `npm run restart` | Quick restart |
| `npm run reset:full` | Complete reset + reinstall |
| `node scripts/dev-server.js` | Smart auto-restart server |

**🎉 No more server issues! These commands handle everything automatically.**
