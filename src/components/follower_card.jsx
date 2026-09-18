import {
    IconUp,
    IconDown,
} from './icons';

import { getPlatformIcon, getPlatformColorClass, parseAnimatedValue } from '../utils/utils';

// 1. Dictionnaire Border card via pseudo-élément ::before
const platformTopBar = {
    facebook: 'before:bg-facebook',
    twitter: 'before:bg-twitter',
    instagram: 'before:bg-instagram',
    youtube: 'before:bg-youtube',
};

export default function FollowerCard({
    platform,
    user,
    total,
    unit,
    today,
    isPositive,
}) {
    // Récupération dynamique de l'icône de plateforme
    const PlatformIcon = getPlatformIcon(platform);

    // Sélection du chevron selon isPositive
    const TrendIcon = isPositive ? IconUp : IconDown;

    // Décomposition pour l'animation CSS (@property --num)
    const { num, suffix } = parseAnimatedValue(total);

    return (
        <article
            className={`relative overflow-hidden rounded-md bg-light-card dark:bg-dark-card p-7 text-center transition-colors duration-200 hover:bg-light-card-hover dark:hover:bg-dark-card-hover cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 ${platformTopBar[platform]}`}
        >
            {/* 1. Pseudo + Icône réseau social */}
            <div className="flex items-center justify-center gap-2 mb-6">
                {PlatformIcon && (
                    <PlatformIcon className={`w-5 h-5 ${getPlatformColorClass(platform)}`} />
                )}
                <h2 className="text-xs font-bold text-light-text dark:text-dark-text">
                    {user}
                </h2>
            </div>

            {/* 2. Total des followers / abonnés avec animation CSS */}
            <div className="mb-6">
                <div className="min-h-[48px] flex items-center justify-center">
                    <p
                        className="counter-anim text-5xl font-bold tracking-tight text-light-text-heading dark:text-dark-text-heading leading-none"
                        style={{
                            '--target-num': num,
                            '--suffix': suffix,
                        }}
                    >
                    </p>
                </div>
                <p className="text-xl uppercase tracking-[5px] text-light-text dark:text-dark-text mt-1">
                    {unit}
                </p>
            </div>

            {/* 3. Évolution du jour (chevron up/down + couleur conditionnelle) */}
            <div className="flex items-center justify-center gap-1 text-xs font-bold">
                <TrendIcon className={isPositive ? 'text-lime-green' : 'text-bright-red'} />
                <span className={isPositive ? 'text-lime-green' : 'text-bright-red'}>
                    {today} Today
                </span>
            </div>
        </article>
    );
}