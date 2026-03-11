const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf-8');

css = css.replace(/^([ \t]*)@apply\s+(.+?);/gm, (match, indent, classesStr) => {
    const classes = classesStr.split(/\s+/).filter(Boolean);
    const groups = { base: [] };

    for (const cls of classes) {
        const colonIndex = cls.lastIndexOf(':');
        if (colonIndex === -1) {
            groups.base.push(cls);
        } else {
            const variant = cls.substring(0, colonIndex);
            const utility = cls.substring(colonIndex + 1);
            if (!groups[variant]) groups[variant] = [];
            groups[variant].push(utility);
        }
    }

    let newCss = '';
    if (groups.base.length > 0) {
        newCss += `${indent}@apply ${groups.base.join(' ')};\n`;
    }

    for (const [variantCombo, utils] of Object.entries(groups)) {
        if (variantCombo === 'base') continue;

        const parts = variantCombo.split(':');
        let block = `${indent}  @apply ${utils.join(' ')};\n`;

        // Wrap from inside out
        for (let i = parts.length - 1; i >= 0; i--) {
            const p = parts[i];
            let wrapper = '';
            if (['hover', 'focus', 'active', 'disabled'].includes(p)) {
                wrapper = `${indent}&:${p} {\n`;
            } else if (p === 'dark') {
                wrapper = `${indent}@variant dark {\n`;
            } else if (p === 'group-hover') {
                wrapper = `${indent}.group:hover & {\n`;
            } else {
                wrapper = `${indent}@variant ${p} {\n`;
            }
            block = wrapper + block + `${indent}}\n`;
        }
        newCss += block;
    }

    return newCss.trimEnd();
});

fs.writeFileSync('src/app/globals.css', css, 'utf-8');
console.log('Refactored variants in globals.css');
