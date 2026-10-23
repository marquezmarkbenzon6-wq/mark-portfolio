const navigationLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main[id], section[id]');
const moonToggle = document.querySelector('.moon-toggle');
const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const scrollProgress = document.querySelector('.scroll-progress');
const scrollProgressFill = scrollProgress.querySelector('span');

document.addEventListener('pointerdown', (event) => {
	if (prefersReducedMotion.matches || event.button !== 0) {
		return;
	}

	const ripple = document.createElement('span');
	ripple.className = 'click-ripple';
	ripple.style.left = `${event.clientX}px`;
	ripple.style.top = `${event.clientY}px`;
	document.body.append(ripple);
	ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
});

let progressFrame = 0;

const updateScrollProgress = () => {
	if (progressFrame) {
		return;
	}

	progressFrame = window.requestAnimationFrame(() => {
		const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
		const progress = scrollableHeight > 0
			? Math.min(100, window.scrollY / scrollableHeight * 100)
			: 0;

		scrollProgressFill.style.transform = `scaleX(${progress / 100})`;
		scrollProgress.setAttribute('aria-valuenow', String(Math.round(progress)));
		progressFrame = 0;
	});
};

window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('resize', updateScrollProgress);
updateScrollProgress();

const revealTargets = document.querySelectorAll(
	'.greeting-copy, .about-intro, .profile, .section-heading, .experience-entry, .activity-grid a, .social > *'
);

if (prefersReducedMotion.matches) {
	revealTargets.forEach((target) => target.classList.add('is-visible'));
} else {
	const revealObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: .08 });

	revealTargets.forEach((target) => {
		target.classList.add('reveal');
		revealObserver.observe(target);
	});
}

moonToggle.addEventListener('click', () => {
	const dayModeEnabled = document.body.classList.toggle('day-mode');
	const label = dayModeEnabled ? 'Switch to night mode' : 'Switch to day mode';

	moonToggle.setAttribute('aria-pressed', String(dayModeEnabled));
	moonToggle.setAttribute('aria-label', label);
	moonToggle.title = label;
});

if (hasFinePointer.matches) {
	let cursorFrame = 0;

	document.addEventListener('pointermove', (event) => {
		if (cursorFrame) {
			return;
		}

		cursorFrame = window.requestAnimationFrame(() => {
			document.body.style.setProperty('--cursor-x', `${event.clientX}px`);
			document.body.style.setProperty('--cursor-y', `${event.clientY}px`);
			document.body.classList.add('cursor-active');
			cursorFrame = 0;
		});
	}, { passive: true });

	document.addEventListener('pointerleave', () => {
		document.body.classList.remove('cursor-active');
		document.body.style.setProperty('--cursor-x', '-300px');
		document.body.style.setProperty('--cursor-y', '-300px');
	});
}

document.querySelectorAll('.activity-grid a').forEach((activityLink) => {
	activityLink.target = '_blank';
	activityLink.rel = 'noopener';
});

navigationLinks.forEach((link) => {
	link.addEventListener('click', (event) => {
		const target = document.querySelector(link.getAttribute('href'));

		if (target) {
			event.preventDefault();
			target.scrollIntoView({ behavior: 'smooth' });
		}
	});
});

const sectionObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			navigationLinks.forEach((link) => {
				link.classList.toggle(
					'active',
					link.getAttribute('href') === `#${entry.target.id}`
				);
			});
		}
	});
}, { threshold: .5 });

sections.forEach((section) => sectionObserver.observe(section));
