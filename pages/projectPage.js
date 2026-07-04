class ProjectPage {
    constructor(page) {
        this.page = page;
        this.projectsLink = page.getByRole('link', { name: 'Projects', exact: true });
        this.newProjectLink = page.getByRole('link', { name: 'New project' });
        this.projectNameInput = page.locator('#project_name');
        this.createButton = page.locator('input[name="commit"], input[type="submit"]');
        this.flashNotice = page.locator('#flash_notice, .flash.notice');
        this.newIssueLink = page.getByRole('link', { name: 'New issue' });
        this.issueSubjectInput = page.locator('#issue_subject');
    }

    async navigateToNewProject() {
        await this.projectsLink.click();
        await this.newProjectLink.click();
    }

    async createProject(name) {
        await this.projectNameInput.fill(name);
        await this.createButton.click();
    }

    async createIssue(subject) {
        await this.newIssueLink.click();
        await this.issueSubjectInput.fill(subject);
        await this.createButton.click();
    }
}
module.exports = { ProjectPage };