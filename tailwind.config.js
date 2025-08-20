// -- STATEMENTS

/** @type {import('tailwindcss').Config} */
export default {
	content:
	[
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme:
	{
		extend:
		{
			colors:
			{
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: 'hsl(var(--card))',
				'card-foreground': 'hsl(var(--card-foreground))',
				popover: 'hsl(var(--popover))',
				'popover-foreground': 'hsl(var(--popover-foreground))',
				primary: 'hsl(var(--primary))',
				'primary-foreground': 'hsl(var(--primary-foreground))',
				'primary-hover': 'hsl(var(--primary-hover))',
				secondary: 'hsl(var(--secondary))',
				'secondary-foreground': 'hsl(var(--secondary-foreground))',
				'secondary-hover': 'hsl(var(--secondary-hover))',
				accent: 'hsl(var(--accent))',
				'accent-foreground': 'hsl(var(--accent-foreground))',
				'accent-hover': 'hsl(var(--accent-hover))',
				muted: 'hsl(var(--muted))',
				'muted-foreground': 'hsl(var(--muted-foreground))',
				destructive: 'hsl(var(--destructive))',
				'destructive-foreground': 'hsl(var(--destructive-foreground))',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				success: 'hsl(var(--success))',
				'success-foreground': 'hsl(var(--success-foreground))',
				warning: 'hsl(var(--warning))',
				'warning-foreground': 'hsl(var(--warning-foreground))',
				info: 'hsl(var(--info))',
				'info-foreground': 'hsl(var(--info-foreground))',
				'sidebar-background': 'hsl(var(--sidebar-background))',
				'sidebar-foreground': 'hsl(var(--sidebar-foreground))',
				'sidebar-primary': 'hsl(var(--sidebar-primary))',
				'sidebar-primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
				'sidebar-accent': 'hsl(var(--sidebar-accent))',
				'sidebar-accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
				'sidebar-border': 'hsl(var(--sidebar-border))',
				'sidebar-ring': 'hsl(var(--sidebar-ring))'
			},
			borderRadius:
			{
				DEFAULT: 'var(--radius)'
			}
		}
	},
	plugins: []
} 