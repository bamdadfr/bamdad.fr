import { ThemeStyles } from '@/styles/theme.styles'

export const ContactData = [
    {
        'text': 'curriculum vitæ',
        'icon': '🚀',
        'color': ThemeStyles.colors.button.blue,
        'hover': ThemeStyles.colors.white,
        'delay': 4000,
        'onClick': () => window.open ('https://cv.bamdad.fr/', '_blank'),
    },
    {
        'text': 'stories',
        'icon': '🧩',
        'color': ThemeStyles.colors.button.red,
        'hover': ThemeStyles.colors.white,
        'delay': 5000,
        'onClick': () => window.open ('https://stories.bamdad.fr/', '_blank'),
    },
    {
        'text': 'email me',
        'icon': '✉️',
        'color': ThemeStyles.colors.button.yellow,
        'hover': ThemeStyles.colors.primary,
        'delay': 6000,
        'onClick': () => window.open ('mailto:hi@bamdad.fr', '_self'),
    },
]