const forms = {
    fill_out_details : `
        <form id="generalForm" style="max-width: 500px; margin: auto;">
        <h2>DETAILS</h2>
        <input type="text" id="name" name="name" placeholder="name..." required style="width: 100%; margin-bottom: 10px;"><br>
        <input type="email" id="email" name="email" placeholder="email..." required style="width: 100%; margin-bottom: 10px;"><br>
        <input type="text" id="subject" name="subject" placeholder="subject..." style="width: 100%; margin-bottom: 10px;"><br>
        <textarea id="message" name="message" rows="5" placeholder="message..." style="width: 97%; margin-bottom: 10px;"></textarea><br>
        <button id="submit_button" type="submit">Submit</button>
        </form>
        `,
    upload_resume : `
        <h2>UPLOAD YOUR RESUME</h2>
        <input type="file" id="resume_input" />
        <button id="submit_button">UPLOAD</button>
        `,
    upload_cover_letter : `
        <form id="generalForm" style="max-width: 500px; margin: auto;">
        <h2>UPLOAD YOUR RESUME</h2>
        <button id="submit_button">UPLOAD</button>
        </form>
        `
};