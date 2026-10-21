import { projects } from './data/projects';

test('highlights the current portfolio projects', () => {
  const projectNames = projects.map(project => project.title);

  expect(projectNames).toContain('Naxel Tech');
  expect(projectNames).toContain('Disque Tech Fácil');
  expect(projectNames).toContain('Paula Moura Arquitetura');
  expect(projectNames).toContain('LevelFit');
  expect(projectNames).not.toContain('Suporte Técnico TI');
});
