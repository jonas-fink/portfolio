import React from 'react';

const Projects = () => {
    return (
        <div className="flex flex-col gap-3">
            <p className="text-sm text-muted">
                <span className="text-accent">02</span> AUSGEWÄHLTE PROJEKTE
            </p>
            <h1>Neueste Projekte</h1>
            <p className="text-sm text-muted">
                ~/projects/features{' '}
                <span className="inline-block -translate-y-0.75"> .</span> 3 von
                3 sichtbar
            </p>
        </div>
    );
};

export default Projects;
