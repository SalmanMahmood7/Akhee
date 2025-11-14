module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{js,jsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		screens: {
			'xs': '375px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'1366': '1366px',
			'1.5xl': '1400px',
			'2xl': '1536px',
			'3xl': '1920px',
		},
		extend: {
			fontFamily: {
				'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
				'display': ['var(--font-inter-display)', 'var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				orange: 'hsl(var(--color-orange))',
				// Professional software house colors
				'blue-50': '#eff6ff',
				'blue-100': '#dbeafe',
				'blue-200': '#bfdbfe',
				'blue-600': '#2563eb',
				'blue-700': '#1d4ed8',
				'blue-800': '#1e40af',
				'gray-50': '#f9fafb',
				'gray-100': '#f3f4f6',
				'gray-200': '#e5e7eb',
				'gray-300': '#d1d5db',
				'gray-500': '#6b7280',
				'gray-600': '#4b5563',
				'gray-700': '#374151',
				'gray-900': '#111827',
				'emerald-600': '#059669',
				'purple-600': '#9333ea',
				'orange-500': '#f97316',
				'orange-600': '#f97316',
				'red-600': '#dc2626',
				'cyan-600': '#0891b2',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-hero': 'var(--gradient-hero)'
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'glow': 'var(--shadow-glow)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'subtle-drift': {
					'0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
					'25%': { transform: 'translate(-10px, -5px) rotate(0.5deg)' },
					'50%': { transform: 'translate(5px, -10px) rotate(-0.3deg)' },
					'75%': { transform: 'translate(-5px, 5px) rotate(0.2deg)' }
				},
				'spin-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'bounce-slow': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(45deg)',
						'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': { 
						transform: 'translateY(-10px) rotate(45deg)',
						'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'subtle-drift': 'subtle-drift 15s ease-in-out infinite',
				'spin-slow': 'spin-slow 20s linear infinite',
				'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
				'float': 'float 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}