# <img src="https://img.icons8.com/color/24/000000/project.png" style="vertical-align: middle;" height="24" width="24"/> Join - Kanban Project Management Tool

## <img src="https://img.icons8.com/color/24/000000/play.png" style="vertical-align: middle;" height="24" width="24"/> About

Web-based Kanban app for task management: Users can create, organise and track tasks in interactive lists - ideal for individuals or teams.
Updated Projekt from https://github.com/RobbyRunge/Join-Fork

## <img src="https://cdn-icons-png.flaticon.com/512/1541/1541425.png" style="vertical-align: middle;" height="24" width="24"/> Features

- User authentication system
- Task management with drag and drop functionality
- Priority levels for tasks (Urgent, Medium, Low)
- Subtask creation and management
- Contact management system
- Responsive design for mobile, tablet and desktop

## <img src="https://cdn-icons-png.flaticon.com/512/10015/10015092.png" style="vertical-align: middle;" height="24" width="24"/> How to Use

1. Create an account or log in
2. Navigate through the summary dashboard to see your tasks at a glance
3. Add tasks with detailed information like title, description, category, and priority
4. Assign tasks to contacts
5. Move tasks between different status columns on the board
6. Track progress and manage workflow

## <img src="https://img.icons8.com/color/24/000000/code.png" style="vertical-align: middle;" height="24" width="24"/> Technologies

- HTML5
- CSS3
- JavaScript
- Local Storage for data persistence

## <img src="https://img.icons8.com/color/24/000000/folder-invoices.png" style="vertical-align: middle;" height="24" width="24"/> Structure of the project
```
join/
├── .vscode/ # VSCode configuration
|
├── assets/
│ ├── fonts/ # Fonts
│ └── icons/ # Icons  
|
├── css/
│ ├── components/ # CSS for reusable components
│ │ ├── add_task_in_board.css
│ │ ├── card.css
│ │ ├── contact_list.css
│ │ ├── contact_overlay_animation.css
│ │ ├── custom_dropdown_menu.css
│ │ ├── edit_section.css
│ │ └── openCard.css
| |
│ ├── pages/ # CSS for specific pages
│ │ ├── add_task.css
│ │ ├── board.css
│ │ ├── contacts.css
│ │ ├── help.css
│ │ ├── legal.css
│ │ ├── login.css
│ │ ├── policy.css
│ │ ├── policy_legal_login_responsive.css
│ │ ├── signUp.css
│ │ ├── summary.css
│ │ └── summary_responsive.css
| |
│ ├── utilities/ # CSS for utilities and general styles
│ │ ├── aside.css
│ │ ├── header.css
│ │ ├── main.css
│ │ └── submenu.css
| |
│ └── standard.css # Global CSS file
|
|── out/ # JSDoc generated documentation
|
├── pages/ # All HTML files
│ ├── contacts/ # Contacts
│ │ ├── contacts.html
│ ├── help/ # help
│ │ ├── contacts.html
│ ├── legal/ # Legal Notice pages
│ │ ├── legal_notice.html
│ │ ├── legal_notice_login.html
| ├── policy/ # Privacy Police pages
│ │ ├── privacy_policy.html
│ │ ├── privacy_policy_login.html
│ ├── summary/ # Summary
│ │ ├── summary.html
│ └── tasks/ # Tasks
│   ├── add_task.html
│   └── board.html
|
├── scripts/
| ├── animations/ # JavaScript for animations
| | └── contact_overlay_animations.js
| |
│ ├── components/ # JavaScript for reusable components
│ │ ├── add_task_board_eventlistener.js
│ │ ├── add_task_contacts.js
│ │ ├── add_task_in_board.js
│ │ ├── contact_validation.js
│ │ ├── drop_down_menu.js
│ │ ├── edit_function.js
│ │ ├── highlight_droppoint.js
│ │ ├── openCard.js
│ │ ├── priorityButtons.js
│ │ ├── scroll.js
│ │ ├── search_function.js
│ │ ├── signUpEventListener.js
│ │ └── write_edit_subtask.js
| |
│ ├── pages/ # JavaScript for specific pages
│ │ ├── add_task.js
│ │ ├── board.js
│ │ ├── contacts.js
│ │ ├── login.js
│ │ ├── signUp.js
│ │ └── summary.js
| |
│ ├── templates/ # JavaScript for HTML template generation
│ │ ├── HTMLTamplates.js
│ │ ├── add_task_template.js
│ │ ├── contact_template.js
│ │ └── write_edit_subtask_template.js
| |
│ └── utilities/ # JavaScript for utility functions
│   ├── checkActiveUser.js
│   ├── contact_overlay_animations.js
│   ├── orientation.js
│   └── signUpEventListener.js
|
├── .gitignore # Files/folders ignored by Git
|
├── README.md # Project description
|
└── up.bat # Script for development environment
```
## <img src="https://img.icons8.com/color/24/000000/conference-call.png" style="vertical-align: middle;" height="24" width="24"/> Installation

1. Clone the repository:
   ```
   git clone https://github.com/RobbyRunge/Join-Groupwork.git
   ```
2. Open `index.html` in your browser to start using the application

## <img src="https://cdn-icons-png.flaticon.com/512/18243/18243124.png" style="vertical-align: middle;" height="24" width="24"/> Authors 

- Robby Runge
- https://github.com/D-Aldin
- https://github.com/Simib92
