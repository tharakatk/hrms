// Tailwind CSS Configuration for lifeHRMS
// This file is loaded via <script> tag after the Tailwind CDN
tailwind.config = {
    theme: {
        extend: {
            colors: {
                /* Zoho-inspired deep blues + Stimulsoft accent greens */
                'brand': {
                    50:  '#eef4ff',
                    100: '#d9e6ff',
                    200: '#bcd4ff',
                    300: '#8eb8ff',
                    400: '#5990ff',
                    500: '#3366ff',
                    600: '#1a3ff5',
                    700: '#132de1',
                    800: '#1626b6',
                    900: '#18268f',
                    950: '#0f1757',
                },
                'accent': {
                    50:  '#edfff5',
                    100: '#d5ffe9',
                    200: '#aeffd4',
                    300: '#70ffb2',
                    400: '#2bfd88',
                    500: '#00e66a',
                    600: '#00bf54',
                    700: '#009545',
                    800: '#067539',
                    900: '#076031',
                    950: '#003619',
                },
                'surface': {
                    50:  '#f8f9fc',
                    100: '#f1f3f8',
                    200: '#e8ebf2',
                    300: '#d4d9e6',
                    400: '#a9b1c6',
                    500: '#7c869e',
                    600: '#5c6479',
                    700: '#464c5e',
                    800: '#2d3142',
                    900: '#1b1f2e',
                    950: '#0d1017',
                }
            },
            fontFamily: {
                'display': ['"DM Sans"', 'system-ui', 'sans-serif'],
                'body': ['"DM Sans"', 'system-ui', 'sans-serif'],
                'mono': ['"JetBrains Mono"', 'monospace'],
            }
        }
    }
};
