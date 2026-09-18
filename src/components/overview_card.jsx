import {
    IconUp,
    IconDown,
} from './icons';

import { getPlatformIcon, getPlatformColorClass, parseAnimatedValue } from '../utils/utils';

export default function OverviewCard({
    platform,
    title,
    value,
    percentage,
    isPositive,
}) {
    // Récupération dynamique de l'icône de plateforme
    const PlatformIcon = getPlatformIcon(platform);

    // Sélection du chevron selon isPositive
    const TrendIcon = isPositive ? IconUp : IconDown;

    // Décomposition pour l'animation CSS (@property --num)
    const { num: valNum, suffix: valSuffix } = parseAnimatedValue(value);
    const { num: pctNum, suffix: pctSuffix } = parseAnimatedValue(percentage);

    return (
        <article className="relative overflow-hidden rounded-md bg-light-card dark:bg-dark-card p-7 text-center transition-colors duration-200 hover:bg-light-card-hover dark:hover:bg-dark-card-hover cursor-pointer">

            {/* 1. title + Icône réseau social */}
            <div className="flex items-center justify-between gap-2 mb-6">
                <h2 className="text-xs font-bold text-light-text dark:text-dark-text">
                    {title}
                </h2>
                {PlatformIcon && (
                    <PlatformIcon className={`w-5 h-5 ${getPlatformColorClass(platform)}`} />
                )}
            </div>

            {/* 2. Total des followers / abonnés avec animation CSS */}
            <div className="flex items-end justify-between gap-8 min-h-[48px]">
                <p
                    className="counter-anim text-5xl font-bold tracking-tight text-light-text-heading dark:text-dark-text-heading leading-none"
                    style={{
                        '--target-num': valNum,
                        '--suffix': valSuffix,
                    }}
                >
                </p>
                {/* 3. Évolution du jour (chevron up/down + couleur conditionnelle + pourcentage) */}
                <div className="flex items-center justify-center gap-1 text-xs font-bold pb-1">
                    <TrendIcon className={isPositive ? 'text-lime-green' : 'text-bright-red'} />
                    <span
                        className={`counter-anim ${isPositive ? 'text-lime-green' : 'text-bright-red'}`}
                        style={{
                            '--target-num': pctNum,
                            '--suffix': pctSuffix === '""' ? '"%"' : pctSuffix,
                        }}
                    >
                    </span>
                </div>
            </div>
        </article>
    );
}