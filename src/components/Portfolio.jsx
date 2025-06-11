import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, Mail } from "lucide-react";
import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <main className="dark bg-gray-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Hi, I'm Sreethika Padala 👋</h1>
        <p className="text-lg text-gray-300">
          Aspiring Data Scientist & ML Engineer | Passionate about AI, MLOps, and Generative AI
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/SreethikaP" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/sreethikapadala" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="/Sreethika_Padala_Resume.pdf" download>
            <FileText className="w-6 h-6" />
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🚀 Featured Projects</h2>
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">🎵 Song Recommendation System</h3>
              <p>Built a personalized music recommender using NLP and Hugging Face Transformers.</p>
              <p className="text-sm text-gray-400">Python, Streamlit, MLflow, Hugging Face</p>
              <a href="https://github.com/SreethikaP/Song-Recommendation-System" target="_blank" rel="noopener noreferrer">
                <Button variant="link">View Project</Button>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">🎬 Movie Revenue & IMDb Predictor</h3>
              <p>Forecasted movie success using regression models and Shiny dashboards in R.</p>
              <p className="text-sm text-gray-400">R, Plumber API, Shiny, ggplot2</p>
              <a href="https://github.com/SreethikaP/Movie-Revenue-Prediction" target="_blank" rel="noopener noreferrer">
                <Button variant="link">View Project</Button>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">🔐 Network Security System with MLOps</h3>
              <p>Built an end-to-end ML pipeline for threat detection with CI/CD and AWS deployment.</p>
              <p className="text-sm text-gray-400">Python, FastAPI, AWS, MLflow, Docker</p>
              <a href="https://github.com/SreethikaP/Network-Security" target="_blank" rel="noopener noreferrer">
                <Button variant="link">View Project</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🧠 Skills</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li><strong>Languages:</strong> Python, R, SQL</li>
          <li><strong>ML & Data Tools:</strong> Pandas, Scikit-learn, MLflow, Hugging Face, Streamlit</li>
          <li><strong>Cloud & DevOps:</strong> AWS, Docker, GitHub Actions, MongoDB</li>
          <li><strong>Tools:</strong> VSCode, Jupyter, PostgreSQL, DBeaver</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🎓 Certifications</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Udemy: Data Science Bootcamp (Python, ML, Deep Learning, Statistics)</li>
          <li>YouTube: Generative AI & RAG with LangChain (Krish Naik)</li>
        </ul>
      </section>

      <section id="contact">
        <h2 className="text-2xl font-semibold mb-4">📫 Contact</h2>
        <p className="mb-2">Email: padalasreethika@gmail.com</p>
        <form className="space-y-4 max-w-md">
          <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-gray-800 text-white" />
          <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-gray-800 text-white" />
          <textarea placeholder="Your Message" rows={4} className="w-full p-2 rounded bg-gray-800 text-white" />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </section>
    </main>
  );
}
