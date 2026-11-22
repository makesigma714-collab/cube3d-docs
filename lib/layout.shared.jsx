import { appName, gitConfig } from './shared'

export function baseOptions() {
  return {
    nav: {
      title: (
        <>
          <img src="/logo.svg" alt="" width={24} height={24} />
          <span className="font-semibold">{appName}</span>
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [{ text: 'Play Cube3D', url: 'https://cube2d.net', external: true }],
  }
}
