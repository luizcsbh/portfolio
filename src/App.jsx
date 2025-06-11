import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Github, Linkedin, Mail, ExternalLink, Code, Infinity as InfinityIcon, AppWindow, ChevronLeft, ChevronRight } from 'lucide-react';
import profilePhoto from './assets/profile-photo.jpg';
import './App.css';
import DownloadComponent from './components/ui/download-component';

const config = {
  GITHUB_USERNAME: import.meta.env.VITE_GITHUB_USERNAME,
  GITHUB_API_URL: import.meta.env.VITE_GITHUB_API_URL,
  PERSONAL_EMAIL: import.meta.env.VITE_PERSONAL_EMAIL,
  LINKEDIN_URL: import.meta.env.VITE_LINKEDIN_URL
};

if (import.meta.env.DEV) {
  console.log('Configurações carregadas:', config);
}

function App() {
  const [allRepos, setAllRepos] = useState([]);
  const [displayedRepos, setDisplayedRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 6;

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userResponse = await fetch(`${config.GITHUB_API_URL}/users/${config.GITHUB_USERNAME}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();
        setUserData(userData);
        let allReposData = [];
        let page = 1;
        let hasMore = true;
        
        while (hasMore) {
          const reposResponse = await fetch(
            `${config.GITHUB_API_URL}/users/${config.GITHUB_USERNAME}/repos?sort=updated&direction=desc&page=${page}&per_page=100`
          );
          if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
          const reposPageData = await reposResponse.json();
          
          if (reposPageData.length === 0) {
            hasMore = false;
          } else {
            allReposData = [...allReposData, ...reposPageData];
            page++;
          }
        }

        const filteredRepos = allReposData.filter(repo => !repo.fork);
        setAllRepos(filteredRepos);
        updateDisplayedRepos(filteredRepos, currentPage);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [currentPage]);

  const updateDisplayedRepos = (repos, page) => {
    const startIndex = (page - 1) * reposPerPage;
    const endIndex = startIndex + reposPerPage;
    setDisplayedRepos(repos.slice(startIndex, endIndex));
  };

  const handlePageChange = (newPage) => {
    const totalPages = Math.ceil(allRepos.length / reposPerPage);
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    updateDisplayedRepos(allRepos, newPage);
  };

  const habilidades = [
    { categoria: "Frontend", icone: <AppWindow className="w-6 h-6" />, skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Blade", "SASS"] },
    { categoria: "Backend", icone: <Code className="w-6 h-6" />, skills: ["PHP", "Python", "Laravel", "Java", "MySQL", "PostgreSQL", "MongoDB", "SQL Serve", "API REST"] },
    { categoria: "DevOps", icone: <InfinityIcon className="w-6 h-6" />, skills: ["Docker", "Kubernetes", "Jenkins", "OpenShift", "CI/CD", "Git", "Linux"] }
  ];

  const getRepoTechnologies = (repo) => {
    if (repo.topics && repo.topics.length > 0) {
      return repo.topics.slice(0, 5);
    }
    return repo.language ? [repo.language] : ['Code'];
  };


  const totalPages = Math.ceil(allRepos.length / reposPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900 dark:text-white">
              Portfólio Luiz Santos
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#sobre" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Sobre</a>
              <a href="#projetos" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Projetos</a>
              <a href="#habilidades" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Habilidades</a>
              <a href="#contato" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src={profilePhoto} 
                alt="Luiz Santos" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              Luiz Santos
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
               Software Engineer Full Stack | PHP | Laravel | React | Docker | CI/CD | Git
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              Especialista em criar experiências digitais modernas e funcionais. 
              Apaixonado por tecnologia e sempre em busca de novos desafios.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href="#projetos" rel="noopener noreferrer">Ver Projetos</a>
              </Button>
              <Button variant="outline" size="lg">
                <DownloadComponent/>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Sobre Mim
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Sou um Engenheiro de Software Full Stack apaixonado por criar soluções escaláveis e inovadoras para desafios complexos.
                Com sólida especialização em Laravel, React.js e Arquitetura de Software, dedico-me ao desenvolvimento de aplicações
                seguras, performáticas e alinhadas às melhores práticas de Clean Code e Arquitetura Limpa.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Minha trajetória profissional abrange experiências significativas tanto no setor público quanto no privado,
                onde participei ativamente de projetos estratégicos de transformação digital.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  <a href={userData?.html_url || `https://github.com/${config.GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  <a href={config.LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Experiência
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Desenvolvedor Senior</h4>
                  <p className="text-slate-600 dark:text-slate-300">Prodemge • 11/2022 - 06/2024</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Desenvolvedor Full Stack Pleno</h4>
                  <p className="text-slate-600 dark:text-slate-300">Br Light • 11/2021 - 11/2022</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Desenvolvedor Full Stack</h4>
                  <p className="text-slate-600 dark:text-slate-300">Aero House • 07/2021 - 09/2021</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Desenvolvedor Full Stack Pleno</h4>
                  <p className="text-slate-600 dark:text-slate-300">Movilway • 08/2020 - 03/2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section com Paginação Local */}
      <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Projetos em Destaque
          </h2>
          
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500">
              Erro ao carregar projetos: {error}
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {displayedRepos.map((repo) => (
                  <Card key={repo.id} className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-xl">{repo.name}</CardTitle>
                      <CardDescription>
                        {repo.description || 'Projeto no GitHub sem descrição'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {getRepoTechnologies(repo).map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2 mt-auto">
                        <Button size="sm" variant="outline" asChild>
                          <a href={repo.homepage || repo.html_url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {repo.homepage ? 'Demo' : 'Ver'}
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Código
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Controles de Paginação */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-8">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Anterior
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <Button
                          key={pageNum}
                          variant={currentPage === pageNum ? "default" : "outline"}
                          size="sm"
                          onClick={() => handlePageChange(pageNum)}
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                    
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <>
                        <span className="mx-1">...</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePageChange(totalPages)}
                        >
                          {totalPages}
                        </Button>
                      </>
                    )}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Próxima
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Habilidades Técnicas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {habilidades.map((categoria, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                      {categoria.icone}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{categoria.categoria}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {categoria.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Estou sempre aberto a novos projetos e oportunidades. 
            Entre em contato e vamos conversar sobre como posso ajudar.
          </p>
          <div className="flex justify-center space-x-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-5 h-5 mr-2" />
              <a href={`mailto:${config.PERSONAL_EMAIL}`} target="_blank" rel="noopener noreferrer">{config.PERSONAL_EMAIL}</a>
            </Button>
            <Button variant="outline" size="lg">
              <Linkedin className="w-5 h-5 mr-2" />
              <a href={config.LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
            <Button variant="outline" size="lg">
              <Github className="w-5 h-5 mr-2" />
              <a href={userData?.html_url || `https://github.com/${config.GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">GitHub</a>
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Luiz Santos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;