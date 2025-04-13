function renderCard(id, category, title, discription, completedSubtasks, subtasks, prio) {
  let progressIndicatorHTML = "";
  if (subtasks > 0) {
    progressIndicatorHTML = `
      <div class="progress_indicator">
        <div class="progress_container">
          <div id="progress_bar${id}" class="progress_bar" style="width: 0%"></div>
        </div>
        <span id="subtasks${id}">${completedSubtasks}/${subtasks} Subtasks</span>
      </div>`;
  }
  return ` 
    <article id=${id} onclick="overlayOn(event), getData(event)" ondragstart="draggedElementID(event)" class="card" draggable="true")>
      <div class="category">${category}</div>
      <div class="card_title">
        <h4 id="title">${title}</h4>
      </div>
      <div class="discription">
        <h5 id="discription">${discription}</h5>
      </div>
      ${progressIndicatorHTML}
      <div class="profile_prio_container">
        <div class="profile">
        </div>
        <div class="prio">
          <img src="../../assets/icons/board/${prio}.svg" alt="" />
        </div>
      </div>
    </article>`;
}

function contactTamplate(contact, color, translateX) {
  return `
    <div class="circle" style="transform: translateX(-${translateX}%); background-color: ${color}">${contact}</div>`;
}

function contactTamplateForOpenCard(contact, color, fullName) {
  return `
    <div class="profile_names">
      <div class="circle circle_profile_names" style="background-color: ${color}">${contact}</div>
      <span>${fullName}</span>
    </div>`;
}

function contactTamplateForAddTaskSectionInBoard(contact, color, id) {
  return ` 
    <div id="profile" class="circle circle_profile_names" style="background-color: ${color}" profile_id="${id}">${contact}</div>`;
}

function subtasksTamplate(task, id) {
  return `
    <div class="check_box">
      <input type="checkbox" id="${id}" name="${id}" value="${id}"/>
      <label for="subtask${id}">${task}</label> 
    </div>`;
}

function HTMLForOpenCard(category, title, discription, date, prio, id) {
  return `     
    <div class="category_box">
      <div class="open_card_category">${category}</div>
      <button class="closeBtn"><img onclick="overlayOff()" src="../../assets/icons/board/close.svg" alt="close" /></button>
    </div>
    <div class="content_box">
      <h1 class="open_card_title">${title}</h1>
      <p class="open_card_discription">${discription}</p>
      <div class="open_card_date">
        <table>
          <tr>
            <td>Duo date:</td>
            <td id="date">${date}</td>
          </tr>
          <tr class="space"></tr>
          <tr>
            <td>Priority:</td>
            <td id="priority">${prio}<img src="../../assets/icons/board/${prio}.svg" alt="${prio}" /></td>
          </tr>
        </table>
      </div>
      <div class="open_card_assigned">
        <div class="assigned_box">
          <h5>Assigned To:</h5>
          <div class="profiles"></div>
        </div>
      </div>
      <div class="open_card_subtasks">
        <h5>Subtasks</h5>
        <form id="subtasks_container"></form>
      </div>  
      </div>
      <div class="edit_button_box">
        <div onclick="deleteButton()" class="position_delete">
          <div class="trash_img"></div>
          <button class="delete_button">Delete</button>
        </div>
        <div class="vector"></div>
        <div class="position_edit">
          <div class="edit_img"></div>
          <button onclick="renderEditMenu(), editFunction()" class="edit_button">Edit</button>
        </div>
    </div>`;
}

function HTMLTamplateForTheEditFunk() {
  return `  
    <div class=close_button>
        <button  class="closeBtn"><img onclick="overlayOff()" src="../../assets/icons/board/close.svg" alt="close"></button>
    </div>
    <div class="scrollbar">
      <div class="content_height">
        <form class="title_description_date" action="">
          <label for="editTitle">Title</label>
          <input type="text" maxlength="60" id="editTitle" name="title" class="inputfield dimensions"/><br>
          <label for="editDescription">Description</label>
          <textarea name="description" id="editDescription"></textarea><br /> 
          <label for="editDate">Due date</label>
          <input data-date-format="dd mm yy" name="date" id="editDate" type="date" class="inputfield dimensions"/>
        </form>
        <h3>Priority</h3>
        <div class="button_container_edit">
          <button onclick="urgent(event)" id="urgent" class="prio_button">Urgent <img id="urgentImageEditBtn" src="../../assets/icons/board/forEditUrgent.svg" alt="urgent"></button>
          <button onclick="medium(event)" id="medium" class="prio_button">Medium <img id="mediumImageEditBtn" src="../../assets/icons/board/forEditMedium.svg" alt="medium"></button>
          <button onclick="low(event)" id="low" class="prio_button">Low <img id="lowImageEditBtn" src="../../assets/icons/board/forEditLow.svg" alt="low"></button>
        </div>
        <div>
          <div class="dropdown_menu">
            <div class="dropdown_button" onclick="openMenu()">Select contacts to assign
            <img id="arrow" src="../../assets/icons/board/arrow_drop_down.svg" alt="arrow" /></div>
            <div class="content"></div>
          </div>  
            <div class="assigned_to">
            </div>
          <h3>Subtasks</h3>
          <div class="subtask_input">
            <input id="editSubtask" class="subtask_inputfield_text" oninput="writeEditSubtask()" type="text" placeholder="Add new subtask">
            <div id="subtaskbuttons" class="subtask_button_container">
              <button onclick="focusOnInputField(event)" class="subtask_inputfield_button">
                <img id="plusBtn" src="../../assets/icons/addTask/subtasks_icons.svg" alt="">
              </button>
            </div>
          </div><br>
          <div class="subtasks_box">
          </div>
          <button onclick="okBtnFunk()" id="okBtn">Ok<img src="../../assets/icons/board/check_white_okBtn.svg" alt="" /></button>
        </div>
      </div>
    </div>`;
}

function HTMLTamplateForDropdownProfiles(key, color, initials, name) {
  return `
    <div onclick="assignNewContacts(event), stopEventBubbel(event)" class="align_items" id_value=${key}>
      <div class="icon_name_container">
      <div class="circle circle_profile_names spacing" style="background-color: ${color}">${initials}</div>${name}</div>
      <div>
        <img src="../../assets/icons/checkbox/openCardRectangle.svg" alt="" srcset="">
      </div>
    </div>`;
}

function HTMLTamplateForDropdownProfilesSectionAddTask(key, color, initials, name) {
  return `
    <div onclick="chooseContact(event)" class="align_items" id_value=${key}>
      <div class="icon_name_container">
      <div class="circle circle_profile_names spacing" style="background-color: ${color}">${initials}</div>${name}</div>
      <div>
        <img src="../../assets/icons/checkbox/openCardRectangle.svg" alt="" srcset="">
      </div>
    </div>`;
}

function setStandardButtonInOpenCard() {
  document.getElementById("subtaskbuttons").innerHTML = `
    <button class="subtask_inputfield_button">
        <img src="../../assets/icons/addTask/subtasks_icons.svg" alt="">
    </button>`;
}

function setdubbleButtonInOpenCard() {
  document.getElementById("subtaskbuttons").innerHTML = `
    <button class="subtask_inputfield_button">
        <img onclick="clearEditSubtask(event)" src="../../assets/icons/addTask/cross.svg" alt="">
    </button>
    <div class="pixelbar_mini"></div>
    <button class="subtask_inputfield_button">    
        <img id="confirmBtn" onclick="addNewSubtask(event)" src="../../assets/icons/addTask/done.svg" alt="">
    </button>
`;
}

function HTMLTamplateForSubtasksInTheEditMenu(id, task) {
  return ` 
    <div class="subtask_box_items" onclick="editSubtaskFunk(event)" id_subtask="${id}" >
      <div class="editTask"><p>&bull; ${task}</p></div>
      <div class="subtask_edit_buttons">
        <img class="pen" src="../../assets/icons/board/subtasks_pen.svg" alt="edit">
        <img src="../../assets/icons/board/vector_line_for_subtask_edit.svg" alt="line"/>
        <img class="trash" onclick="deleteSubtask(event)" src="../../assets/icons/board/subtasks_trash.svg" alt="delete" id_trash="${id}">
      </div>
    </div>`;
}

function HTMLTamplateForEditSubtask(id) {
  return `
    <div  class="edit_subtask_input_field">
      <label for="editInputField"></label>
      <input onclick="stopEventBubbel(event)" type="text" id="${id}" />
      <div class="buttons">
        <img class="trash" onclick="deleteSubtask(event)" src="../../assets/icons/board/subtasks_trash.svg" alt="trash" id_trash="${id}"/>
        <img src="../../assets/icons/board/vector_line_for_subtask_edit.svg" alt="line" />
        <img class="confirm" src="../../assets/icons/board/confirm.svg" alt="confirm" />
      </div>            
    </div>`;
}

function HTMLTamplateForAddTaskInBorad() {
  return `
    <div class="title_and_closeBtn">
      <h1>Add Task</h1>
      <button onclick="hideOverlay()"><img src="../../assets/icons/board/close.svg" alt="close"></button>
    </div>
    <div class="all_content">
      <div class="no_space_between input_container">
        <div class="inputfield_title_container">
            <span class="display_flex"><p class="display_flex tasktitles">Title</p><p class="color_red tasktitles">*</p></span>
            <input class="inputfield" maxlength="60" id="title" placeholder="Enter a title" type="text" >
            <span id="titleRequired" class="required required_title hide_element">This field is requierd</span>
        </div>
        <div class="inputfield_title_container">
            <p class="tasktitles">Description</p>
            <textarea class="textareafield" id="description" placeholder="Enter a Description" name="Description"></textarea>
        </div>
        <div class="inputfield_title_container">
            <p class="tasktitles">Assigned to</p>
            <div class="section_name">
                <div onclick="toggleContactDropdown()" class="dropdown_button add_task_section">
                    Select contacts to assign
                    <img class="toggleContactsIcon" src="../../assets/icons/board/arrow_drop_down.svg" alt="arrow" />
                </div>
                <div class="contentSectionAddTask display_none hidden">
                    <!-- Contact items will be rendered here -->
                </div>
                <div class="chosen_contacts"></div>
            </div>
        </div>
        <div class="assigned_contact_wrapper" id="assigned"></div>
      </div>
      <div class="pixelbar"></div>
      <div class="input_container">
        <div class="inputfield_title_container">
            <span class="display_flex"><p class="tasktitles">Due date</p><p class="color_red tasktitles">*</p></span>
            <input class="inputfield" id="dateBoard" type="date" required>
            <span id="dateRequired" class="required required_date hide_element">This field is requierd</span>
        </div>
        <div class="inputfield_title_container">
            <p class="tasktitles">Prio</p>
            <div class="button_container_edit button_container_section_board">
                <button onclick="buttonUrgent(event)" id="urgent" class="prioBtn transition">Urgent <div id="iconurgent" class="prio_icon"><img src="../../assets/icons/addTask/icon_urgent.svg" alt=""></div></button>
                <button onclick="buttonMedium(event)" id="medium" class="prioBtn transition">Medium<div id="iconmedium" class="prio_icon"><img src="../../assets/icons/addTask/icon_medium.svg" alt=""></div></button>
                <button onclick="buttonLow(event)" id="low" class="prioBtn">Low<div id="iconlow" class="prio_icon transition"><img src="../../assets/icons/addTask/icon_low.svg" alt=""></div></button>
            </div>
        </div>
        <div class="inputfield_title_container">
          <span class="display_flex"><p class="tasktitles">Category</p><p class="color_red tasktitles">*</p></span>
            <select onclick="mimicPlaceHolder()" class="inputfield" id="category" placeholder="Select task category" required>
                <option value="placeholder">Select task category</option>
                <option value="Technical Task">Technical Task</option>
                <option value="User Story">User Story</option>
            </select>
            <span id="categoryRequired" class="required required_category hide_element">This field is requierd</span>
        </div>
        <div class="inputfield_title_container">
          <p class="tasktitles">Subtasks</p>
          <div class="subtask_inputfield">
            <input id="subtask" class="subtask_inputfield_text" type="text" onclick="focusTheField()" placeholder="Add new subtask">
            <div id="subtaskbuttons" class="subtask_button_container">
              <button class="subtask_inputfield_button" onclick="focusTheField()">
                <img id="plusIcon" src="../../assets/icons/addTask/subtasks_icons.svg" alt="">
              </button>
                <div class="inputFiledSubtask hide_element">
                  <div class="iconContainerClose">
                    <img onclick="closeInputField()" id="closeIcon" class="closeIcons" src="../../assets/icons/board/closesmall.svg" alt="close">
                  </div>
                  <div>
                    <img id="vector"  src="../../assets/icons/board/vectorOpenCard.png" alt="line">
                  </div>  
                  <div class="iconContainerCheck">
                    <img onclick="newSubtask()" id="checkIcon"  src="../../assets/icons/board/check.svg" alt="check">
                  </div>  
                </div>  
            </div>
          </div>
          <div id="tasks_wrapper" class="subtask_wrapper_board">
          </div>
        </div>
      </div>
    </div>
    <div class="create_task_container">
      <h5><p>*</p>This field is required</h5>
        <div class="buttons_create_and_cancel">
          <button onclick="hideOverlay()" class="cancelBtn transition">Cancel <img src="../../assets/icons/addTask/cross.svg"</button>
          <button onclick="createTask()" class="createBtn transition">Create Task <img src="../../assets/icons/addTask/check.svg"</button>
        </div>
    </div> `;
}

function HTMLTamplateForSubtasksInAddTaskBoard(task) {
  return `  
    <div>
      <div class="subtask_box_items new_sizes" id="${task}">
        <div class="editTask"><p class="subtask_paragraf">&bull; ${task}</p></div>
        <div class="subtask_edit_buttons">
          <img onclick="editSubtaskInAddTaskAreaBoard(event)" class="pen" src="../../assets/icons/board/subtasks_pen.svg" alt="edit">
          <img src="../../assets/icons/board/vector_line_for_subtask_edit.svg" alt="line"/>
          <img class="trash" onclick="deleteSubtaskBoardSection(event)" src="../../assets/icons/board/subtasks_trash.svg" alt="delete">
        </div>
      </div>`;
}

function HTMLTamplateForEditSubtaskAreaAddTask(id) {
  return `
    <div class="edit_subtask_input_field ">
      <label for="editInputField"></label>
      <input class="input_edit_subtask_board_section" onclick="stopEventBubbel(event)" type="text" />
      <div class="buttons">
        <img class="trash" onclick="deleteEditingSubtask(event)" src=".../../assets/icons/board/subtasks_trash.svg" alt="trash" id_trash="${id}" />
        <img src="../../assets/icons/board/vector_line_for_subtask_edit.svg" alt="line" />
        <img onclick="confirmEditing(event)" class="confirm" src="../../assets/icons/board/confirm.svg" alt="confirm" />
      </div>            
    </div>`;
}
