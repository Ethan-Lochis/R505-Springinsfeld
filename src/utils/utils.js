import {
    IconFacebook,
    IconTwitter,
    IconInstagram,
    IconYouTube,
} from '../components/icons';

const platformIcons = {
    facebook: IconFacebook,
    twitter: IconTwitter,
    instagram: IconInstagram,
    youtube: IconYouTube,
};

const platformColorClasses = {
    facebook: 'text-facebook',
    twitter: 'text-twitter',
    instagram: '', // Instagram gère son propre dégradé via SVG
    youtube: 'text-youtube',
};

export function getPlatformIcon(platform) {
    return platformIcons[platform] || null;
}

export function getPlatformColorClass(platform) {
    return platformColorClasses[platform] || '';
}

/**
 * Extrait la valeur numérique et un éventuel suffixe (ex: '11k' -> { num: 11, suffix: 'k' })
 */
export function parseAnimatedValue(val) {
    if (typeof val === 'number') {
        return { num: val, suffix: '' };
    }
    const cleanStr = String(val).replace(/\s+/g, '');
    const match = cleanStr.match(/^(\d+)(.*)$/);
    if (match) {
        return {
            num: parseInt(match[1], 10),
            suffix: match[2] ? `"${match[2]}"` : '""',
        };
    }
    return { num: 0, suffix: '""' };
}