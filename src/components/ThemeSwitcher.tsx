'use client';

import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <SunIcon className="h-8 w-8" aria-hidden="true" />
    }

    if (!mounted) {
        return null;
    }

    if (resolvedTheme === 'dark') {
        return <SunIcon onClick={() => setTheme('light')} className="h-6 w-6" aria-hidden="true" />

    }
    if (resolvedTheme === 'light') {
        return <MoonIcon onClick={() => setTheme('dark')} className="h-6 w-6" aria-hidden="true" />
    }
};

export default ThemeSwitcher;
