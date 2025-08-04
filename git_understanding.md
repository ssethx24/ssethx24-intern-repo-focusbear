# Understanding Git: Staging vs Committing (In Simple Words)

## What’s the difference between staging and committing?

When you're using Git, you don't save your work all at once. First, you **stage** your changes — this means you’re picking which changes you want to include. Then, you **commit** those changes — this means you’re saving them permanently in your project’s history with a message like “Fixed bug” or “Updated the header.”

Think of it like packing a lunch:
- **Staging** is choosing what food to put in the lunchbox.
- **Committing** is closing the lunchbox and saying, “This is today’s lunch.”

---

## Why does Git make you do both steps?

Git separates staging and committing so you can:
- Choose exactly what we want to save (maybe you don’t want to save *everything* you changed).
- Group changes into logical pieces — like one commit for a bug fix, another for a new feature.
- Take your time to review what’s ready before we save it forever.

---

## When would you stage something but not commit it yet?

Here are a few examples:
- You fixed three things but only want to commit one for now — we can stage just that one.
- We're working on a big change and want to get part of it ready to commit later.
- We’re showing a teammate what’s staged, but you’re not done writing the commit message yet.
-We want to double-check your work before saving it.

---

Thus,  Staging is your prep step, and committing is the save step.
Staging screenshot
![alt text](image-12.png)
Staged file- The green U next to the file name means "Untracked", but now added (staged).

In Git (especially in VS Code), this green color and the U indicator show that Git sees this file as new, and we have staged it using the VS Code interface).

Committing Screenshot
![alt text](image-13.png)

At the bottom in the GRAPH section in the amove image , it shows:

Added the git understanding file. Shaurya
That means your commit went through successfully.

The blue dot on main and the message next to it indicate that this commit is now part of the local branch (main).


# Understanding Merge Conflicts in Git

## What Caused the Conflict?

Merge conflicts in Git occur when changes made in different branches overlap in the same part of a file and Git cannot automatically decide which version to keep.

In my case, I created a merge conflict in a file called `sample.txt`:

- In the `feature-branch`, I edited the file to say:
Hello from the feature branch!

css
Copy code

- In the `main` branch, I edited the same line to:
Hello from the main branch!

yaml
Copy code

When I attempted to merge `feature-branch` into `main`, Git was unable to determine which line to use because both branches modified the same line differently. This caused a **merge conflict**.

---

## How Did I Resolve It?

I used GitHub Desktop to resolve the conflict.

1. After attempting the merge, GitHub Desktop alerted me to a merge conflict in `sample.txt`.
2. I opened the conflicted file. It showed conflict markers like this:

 ```plaintext
 <<<<<<< HEAD
 Hello from the main branch!
 =======
 Hello from the feature branch!
 >>>>>>> feature-branch
I manually edited the file to combine both lines into a single message:

plaintext
Copy code
Hello from both branches!
Then I saved the file, marked the conflict as resolved in GitHub Desktop, and committed the merge.

Finally, I pushed the changes to GitHub using the desktop client.

What Did I Learn?
Merge conflicts occur when two branches make changes to the same line or closely positioned lines in a file.

Git can usually handle merges automatically, but in conflicting cases, human input is needed to resolve ambiguity.

GUI tools like GitHub Desktop make it easy to identify and resolve conflicts visually.

It’s best to resolve conflicts by carefully reviewing changes and combining them logically where needed.

Regularly pulling changes and communicating with collaborators can help minimize the frequency of conflicts.

Successfully created, resolved, and learned from a merge conflict!

---

## Why teams use branches instead of pushing directly to main

### Why is pushing directly to main problematic?
Pushing directly to `main` can lead to unstable or broken code if someone makes a mistake. It can also overwrite others’ work or make debugging harder. That’s why teams prefer to use separate branches for new features or bug fixes.

### How do branches help with reviewing code?
Branches let developers work on their changes separately. When they’re done, they can create a pull request or merge request. This lets others **review the code**, suggest changes, and ensure nothing breaks before it gets added to `main`.

### What happens if two people edit the same file on different branches?
Git will try to merge both changes. If they edit **different lines**, Git handles it automatically. But if they edit the **same lines**, a **merge conflict** happens. Developers will need to manually resolve it and choose which version to keep in the repository.
