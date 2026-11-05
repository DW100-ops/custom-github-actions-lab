# Custom GitHub Actions Lab

A hands-on practical lab demonstrating how to build, configure, and execute custom **JavaScript Actions** and **Docker Container Actions** from scratch without relying on marketplace dependencies.

## Project Structure

```text
custom-github-actions-lab/
│
├── .github/
│   └── workflows/
│       └── custom-actions.yml   # Orchestrator workflow calling both custom actions
│
├── javascript-action/
│   ├── action.yml               # Metadata manifest for the JavaScript action
│   └── index.js                 # Execution logic using Node.js & GITHUB_OUTPUT
│
├── docker-action/
│   ├── action.yml               # Metadata manifest specifying Docker environment
│   ├── Dockerfile               # Alpine Linux container configuration
│   └── script.sh                # Bash script generating the deployment report
│
└── README.md# custom-github-actions-lab
