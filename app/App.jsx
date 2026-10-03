import { useEffect, useRef, useState } from 'react';
import { education, experience, navigation, profile, projects } from './portfolio.js';

function Arrow({ diagonal = false }) {
    return <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        {diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h15m-6-6 6 6-6 6" />}
    </svg>;
}

function Tags({ items }) {
    return <ul className="tags" aria-label="Technologies and skills">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

function Header() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('about');
    const button = useRef(null);
    const header = useRef(null);

    useEffect(() => {
        let frame;
        const update = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                let current = 'about';
                for (const [id] of navigation) {
                    if (document.getElementById(id)?.getBoundingClientRect().top <= 190) current = id;
                }
                if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'contact';
                setActive(current);
            });
        };
        const resize = () => { if (window.innerWidth > 900) setOpen(false); update(); };
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', resize);
        update();
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', resize);
        };
    }, []);

    useEffect(() => {
        if (!open) return;
        const escape = event => {
            if (event.key === 'Escape') { setOpen(false); button.current?.focus(); }
        };
        const outside = event => { if (!header.current?.contains(event.target)) setOpen(false); };
        document.addEventListener('keydown', escape);
        document.addEventListener('pointerdown', outside);
        return () => {
            document.removeEventListener('keydown', escape);
            document.removeEventListener('pointerdown', outside);
        };
    }, [open]);

    return <header className="site-header" ref={header}>
        <div className="wrap header-inner">
            <a className="wordmark" href="#about" onClick={() => setOpen(false)}>Abdus Saboor<span aria-hidden="true">.</span></a>
            <button className="menu-toggle" ref={button} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>
                {open ? 'Close' : 'Menu'}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d={open ? 'm6 6 12 12M6 18 18 6' : 'M4 7h16M4 12h16M4 17h16'} /></svg>
            </button>
            <nav id="navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
                {navigation.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => {
                    setOpen(false);
                    document.getElementById(id)?.focus({ preventScroll: true });
                }}>{label}</a>)}
            </nav>
        </div>
    </header>;
}

function Portrait() {
    const portrait = useRef(null);
    const reset = () => {
        portrait.current?.style.setProperty('--offset-x', '0px');
        portrait.current?.style.setProperty('--offset-y', '0px');
    };
    useEffect(() => {
        const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
        preference.addEventListener('change', reset);
        return () => preference.removeEventListener('change', reset);
    }, []);
    const move = event => {
        if (event.pointerType === 'touch' || !window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        portrait.current.style.setProperty('--offset-x', `${((event.clientX - bounds.left) / bounds.width - 0.5) * 10}px`);
        portrait.current.style.setProperty('--offset-y', `${((event.clientY - bounds.top) / bounds.height - 0.5) * 10}px`);
    };
    return <div className="portrait-block">
        <div className="portrait-frame" ref={portrait} onPointerMove={move} onPointerLeave={reset}>
            <img src="/images/portrait.webp" alt="Abdus Saboor" width="320" height="377" fetchPriority="high" />
        </div>
        <p className="portrait-caption"><span className="location-dot" aria-hidden="true" />{profile.location}</p>
    </div>;
}

function SectionHeading({ id, title, children }) {
    return <div className="section-heading"><h2 id={id}>{title}</h2>{children && <p>{children}</p>}</div>;
}

function ProjectCard({ project }) {
    return <article className="project-panel" id={`project-${project.id}`} tabIndex="-1" aria-labelledby={`title-${project.id}`}>
        <h3 id={`title-${project.id}`}>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <Tags items={project.tags} />
        <div className="project-footer">
            <p className={project.id === 'tacit' ? 'project-status accepted' : 'project-status'}>{project.status}{project.contribution && <span>{project.contribution}</span>}</p>
            {project.links?.map(link => <a className="text-link" href={link.href} key={link.href}>{link.label}<Arrow diagonal /></a>)}
        </div>
    </article>;
}

function ProjectSection({ group, title, description, shaded = false }) {
    return <section id={group} className={`section ${shaded ? 'section-sage' : ''}`} aria-labelledby={`${group}-title`} tabIndex="-1">
        <div className="wrap">
            <SectionHeading id={`${group}-title`} title={title}>{description}</SectionHeading>
            <div className="project-grid">{projects.filter(project => project.group === group).map(project => <ProjectCard key={project.id} project={project} />)}</div>
        </div>
    </section>;
}

export default function App() {
    useEffect(() => {
        const id = window.location.hash.slice(1);
        if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
    }, []);

    return <>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main" tabIndex="-1">
            <section id="about" className="hero wrap" aria-labelledby="intro-title" tabIndex="-1">
                <div className="hero-copy">
                    <h1 id="intro-title"><span>Hi, I’m</span> Abdus Saboor<span className="name-dot" aria-hidden="true">.</span></h1>
                    <p className="hero-role">A full-stack foundation.<br /><strong>An applied machine learning focus.</strong></p>
                    <p className="intro-text">{profile.introduction}</p>
                    <div className="hero-actions"><a className="button button-primary" href="#research">Explore my projects<Arrow /></a><a className="button button-secondary" href="#contact">Get in touch</a></div>
                    <p className="availability">{profile.availability}</p>
                </div>
                <Portrait />
            </section>
            <section id="experience" className="section section-sage" aria-labelledby="experience-title" tabIndex="-1">
                <div className="wrap">
                    <SectionHeading id="experience-title" title="Experience">From enterprise software to the university lab.</SectionHeading>
                    <div className="timeline">{experience.map(job => <article className="experience-entry" key={job.organization}>
                        <p className="experience-dates">{job.dates}</p>
                        <div className="experience-body"><h3>{job.organization}</h3><p className="job-role">{job.role}</p><p className="job-context">{job.context}</p>
                            {job.summary && <p>{job.summary}</p>}
                            {job.details && <ul className="job-details">{job.details.map(detail => <li key={detail}>{detail}</li>)}</ul>}
                            {job.tags && <Tags items={job.tags} />}
                            {job.progression && <div className="progression"><h4>Career progression</h4><ol>{job.progression.map(([role, dates]) => <li key={role}><strong>{role}</strong><span>{dates}</span></li>)}</ol></div>}
                        </div>
                    </article>)}</div>
                </div>
            </section>
            <ProjectSection group="research" title="Research projects" description="Exploring machine learning through collaborative research and academic projects." />
            <ProjectSection group="software" title="Software projects" description="Earlier projects that helped build my full-stack engineering foundation." shaded />
            <section id="education" className="section" aria-labelledby="education-title" tabIndex="-1">
                <div className="wrap"><SectionHeading id="education-title" title="Education" />
                    <div className="education-grid">{education.map(item => <article className="education-entry" key={item.degree}><h3>{item.degree}</h3><p className="institution">{item.institution}</p><p className="education-dates">{item.dates}</p>{item.note && <p className="graduation">{item.note}</p>}{item.description && <p>{item.description}</p>}</article>)}</div>
                </div>
            </section>
            <section id="contact" className="section contact section-sage" aria-labelledby="contact-title" tabIndex="-1">
                <div className="wrap contact-layout"><div><h2 id="contact-title">Let’s connect.</h2><p>I’d love to hear about opportunities where I can bring software engineering and applied ML together.</p><p>{profile.availability}</p></div>
                    <div className="contact-links"><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<Arrow diagonal /></a><a className="phone-link" href="tel:+971529178807">{profile.phone}</a><ul className="social-links">{profile.links.map(link => <li key={link.label}><a href={link.href}>{link.label}<Arrow diagonal /></a></li>)}</ul></div>
                </div>
            </section>
        </main>
        <footer className="site-footer wrap"><span>Abdus Saboor</span><p>Software engineering & applied ML</p><a href="#about">Back to top<svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M12 20V4m-6 6 6-6 6 6" /></svg></a></footer>
    </>;
}
