---
tags:
  - docker
  - macos
  - linux
  - vm
  - windows
---
## Linux
```mermaid
flowchart LR
subgraph OS Linux
	Docker
end
```
No virtual machines, `pivot_root` is used for creating an isolated environment.
## Windows
```mermaid
flowchart LR
subgraph OS Windows
	subgraph VM Hyper-V
		subgraph OS Linux
			Docker
		end
	end
end
```
Windows Linux Subsystem is also Hyper-V.
## MacOS
### x86-based
```mermaid
flowchart LR
subgraph OS MacOS
	subgraph VM HyperKit
		subgraph OS Linux
			Docker
		end
	end
end
```
### ARM-based 
```mermaid
flowchart LR
subgraph OS MacOS
	subgraph VM HyperKit
		subgraph OS Linux for ARM
			subgraph VM QEMU
				subgraph OS Linux
					Docker
				end
			end
		end
	end
end
```

> [!NOTE]
> Solutions for macOS, that make process less complex
> - [OrbStack](https://orbstack.dev/)
>- [Podman](https://podman.io/)
>- [colima](https://github.com/abiosoft/colima)


