import styled, { createGlobalStyle } from 'styled-components';

export const pxToRem = (...values) => {
	return values
		.reduce((acc, current) => (acc += current / 16 + `rem `), '')
		.trim();
};

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
    }
    :root {
        // font size
        --title-mobile: ${pxToRem(24)};     // 24px/1rem = to use in title
        --title-desktop: ${pxToRem(36)};    // 36px/1rem = to use in title

        --subtitle-mobile: ${pxToRem(18)};  // 18px/1rem = to use in subtitle
        --subtitle-Desktop: ${pxToRem(24)}; // 24px/1rem = to use in subtitle

        --body-all: ${pxToRem(
			14
		)};        // 14px/1rem = to use in body and others
        --small-all: ${pxToRem(
			12
		)};    // 12px/1rem = to use in small and others
        
        // Font weight
        --title-and-subtitle: 700;  // 700/bold = to use in title and subtitle
        --body-and-small: 400;    // 400/regular = to use in body and small
        
        // Icon size
        --small-icon: ${pxToRem(16)};   // 16px/1rem = to use in small icons
        --medium-icon: ${pxToRem(24)};  // 24px/1.5rem = to use in medium icons
        --large-icon: ${pxToRem(40)};   // 40px/2.5rem = to use in large icons

        // Margins 
        --margin-wrapper-mobile: ${pxToRem(
			24
		)} auto;   // 24px/1.5rem = to use in wrapper
        --margin-wrapper-desktop: ${pxToRem(
			64
		)} auto;   // 64px/4rem = to use in wrapper

        --margin-inside-mobile: ${pxToRem(
			16
		)} auto;   // 16px/1rem = to use in inside wrapper
        --margin-inside-desktop: ${pxToRem(
			32
		)} auto;   // 32px/2rem = to use in inside wrapper
        
        // Paddings
        --padding-mobile: ${pxToRem(8)};   // 8px/0.5rem = to use in padding
        --padding-desktop: ${pxToRem(16)}; // 16px/1rem = to use in padding

        --padding-wrapper: ${pxToRem(24)}; // 24px/1.5rem = to use in padding

        // others to use in css
        --line-height: 1.3; // 1.3 = to use in line-height
    }
    html {
        scroll-behavior: smooth;
    }
    html, body {
        width: 100%;
        height: 100%;
    }
    body {
        font-family: sans-serif;
        font-size: var(--body-mobile);
        font-weight: var(--body);
        overflow-x: hidden;
        overflow-y: auto;
    }
    img {
        max-width: 100%;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
        outline: none;
        background: none;
        border: none;
    }
    a {
        text-decoration: none;
    }
    .title {
        font-size: var(--title-mobile);
        font-weight: var(--title);
        line-height: var(--line-height);
        // use this as a reference to components
    }
    .subtitle {
        font-size: var(--subtitle-mobile);
        font-weight: var(--subtitle);
        line-height: var(--line-height);
        // use this as a reference to components
    }
    .small {
        font-size: var(--small-mobile);
        font-weight: var(--small);
        line-height: var(--line-height);
        // use this as a reference to components
    }
    #root {
        width: 100%;
        height: 100%;
    }
    .App {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
    }
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	max-width: ${pxToRem(1280)};
	margin: var(--margin-wrapper-mobile);
	padding-block: var(--padding-wrapper);
	// To use in each section component
`;
