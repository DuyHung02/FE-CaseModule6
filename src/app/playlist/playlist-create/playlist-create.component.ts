import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../service/playlist/playlist.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-playlist-create',
    templateUrl: './playlist-create.component.html',
    styleUrls: ['./playlist-create.component.css']
})
export class PlaylistCreateComponent implements OnInit {

    constructor(private playlistService: PlaylistService, private router: Router, private route: ActivatedRoute) {
    }

    account: any
    account_id: any
    id: any = null

    ngOnInit(): void {
        // @ts-ignore
        this.account = JSON.parse(localStorage.getItem("accountToken"))
        this.account_id = this.account.id
    }

    formPlaylist: FormGroup = new FormGroup({
        name: new FormControl,
        active: new FormControl
    })

    savePlaylist() {
        this.id = this.route.snapshot.paramMap.get('id')
        let name = this.formPlaylist.value.name
        let active = this.formPlaylist.value.active
        if (active != null) {
            this.playlistService.savePlaylist(this.account_id, name, active).subscribe(data => {
                if (this.id == null) {
                    this.router.navigate(['/songs'])
                } else {
                    this.router.navigate(['/playlists'])
                }
            })
        } else {
            alert("choice mode")
        }
    }


}
