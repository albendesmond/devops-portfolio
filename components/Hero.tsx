// Hero Section
export default function Hero() {
    return (
        <section className="bg-bg min-h-screen flex flex-col items-center">
            <h1 className="font-heading text-5xl font-bold text-teal">
                Desmond · DevOps Engineer 
            </h1>
            <p className="font-body text-lg text-muted mt-4 mx-w-xl text-center">
                Building reliable infrastructure, one pipeline at a time.
            </p>
            <pre className="font-mono text-sm bg-surface text-gold p-4 rounded-lg mt-8">
                {`$ kubectl get pods --all-namespace`}
            </pre>
        </section>
    );
}