import { ThemeStyles } from '@/styles/theme.styles'

/**
 * @name ContactData
 * @description data feeding the `contact` component
 * @type {Array.<Object.<String, (String, Number)>>}
 */
export const ContactData = [
    {
        'text': 'curriculum vitæ',
        'icon': '🚀',
        'color': ThemeStyles.colors.button.blue,
        'hover': ThemeStyles.colors.white,
        'delay': 4000,
        'href': 'https://cv.bamdad.fr/',
        'target': '_blank',
    },
    {
        'text': 'stories',
        'icon': '🧩',
        'color': ThemeStyles.colors.button.red,
        'hover': ThemeStyles.colors.white,
        'delay': 5000,
        'href': 'https://stories.bamdad.fr/',
        'target': '_blank',
    },
    {
        'text': 'email me',
        'icon': '✉️',
        'color': ThemeStyles.colors.button.yellow,
        'hover': ThemeStyles.colors.primary,
        'delay': 6000,
        'href': 'mailto:hi@bamdad.fr',
        'target': '_self',
    },
]