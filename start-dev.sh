#!/bin/bash

# Get network IP
WSL_IP=$(hostname -I | awk '{print $1}')
WINDOWS_IP=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}')

echo ""
echo "🚀 Starting Brillion Digital Development Server..."
echo ""
echo "📍 Access your website at:"
echo "   🏠 Local:     http://localhost:3000"
echo "   🌐 Network:   http://$WSL_IP:3000"
echo "   💻 Windows:   http://$WINDOWS_IP:3000"
echo ""
echo "📱 For other devices on your network:"
echo "   Use your Windows IP address (run 'ipconfig' in Windows CMD)"
echo ""

# Start the development server
next dev -H 0.0.0.0