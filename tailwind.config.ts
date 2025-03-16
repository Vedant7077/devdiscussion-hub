import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
		extend: {
			fontFamily: {
				sans: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
				mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
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
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale-out': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'100%': { transform: 'scale(0.95)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'slide-in': 'slide-in 0.3s ease-out',
				'slide-out': 'slide-out 0.3s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'scale-out': 'scale-out 0.3s ease-out',
				'enter': 'fade-in 0.3s ease-out, scale-in 0.3s ease-out',
				'exit': 'fade-out 0.3s ease-out, scale-out 0.3s ease-out'
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '100%',
						color: 'inherit',
						a: {
							color: 'inherit',
							textDecoration: 'none',
							fontWeight: '500',
						},
						strong: {
							fontWeight: '700',
						},
						code: {
							color: 'var(--tw-prose-code)',
							backgroundColor: 'var(--tw-prose-code-bg)',
							borderRadius: '0.25rem',
							paddingLeft: '0.25rem',
							paddingRight: '0.25rem',
							paddingTop: '0.125rem',
							paddingBottom: '0.125rem',
							fontWeight: '400',
						},
						'code::before': {
							content: '""',
						},
						'code::after': {
							content: '""',
						},
						pre: {
							color: 'var(--tw-prose-pre-code)',
							backgroundColor: 'var(--tw-prose-pre-bg)',
							overflow: 'auto',
							padding: '1rem',
							borderRadius: '0.375rem',
							border: '1px solid var(--tw-prose-pre-border)',
						},
						'pre code': {
							backgroundColor: 'transparent',
							borderWidth: '0',
							borderRadius: '0',
							padding: '0',
							color: 'inherit',
							fontSize: 'inherit',
							fontWeight: 'inherit',
							lineHeight: 'inherit',
						},
						'h1, h2, h3, h4, h5, h6': {
							color: 'inherit',
							fontWeight: '700',
						},
						h1: {
							fontSize: '2.25rem',
							marginTop: '2.5rem',
							marginBottom: '1.5rem',
						},
						h2: {
							fontSize: '1.875rem',
							marginTop: '2.25rem',
							marginBottom: '1.25rem',
						},
						h3: {
							fontSize: '1.5rem',
							marginTop: '2rem',
							marginBottom: '1rem',
						},
						h4: {
							fontSize: '1.25rem',
							marginTop: '1.75rem',
							marginBottom: '0.75rem',
						}
					},
				},
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require('@tailwindcss/typography')
	],
} satisfies Config;
