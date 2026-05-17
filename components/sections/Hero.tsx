// Hero Section
export default function Hero() {
    return (
        <section className="bg-bg min-h-screen flex flex-col items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-fluid-hero font-heading font-bold text-teal">
                Aspiring · DevOps Engineer 
            </h1>
            <p className="font-body text-lg text-muted mt-4 mx-w-xl text-center">
                I Build, Break, and Automate Systems in Public.
                Aspiring DevOps Engineer focused on CI/CD, cloud infrastructure, and automation.
                This portfolio is my live lab — every project reflects real-world DevOps practices, not tutorials.
            </p>
            <div className="w-full overflow-x-auto rounded-lg bg-surface border border-border">
                <pre className="font-mono text-xs sm:text-sm text-gold p-4 whitespace-pre min-w-max">
                    {`$ kubectl get pods --all-namespaces\n$ docker-compose up -d`}
                </pre>
            </div>
        </section>
    );
}