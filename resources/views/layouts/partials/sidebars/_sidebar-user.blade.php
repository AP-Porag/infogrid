<div class="vertical-menu">

    <div data-simplebar class="h-100">

        <!-- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title">Main</li>

                <li>
                    <a href="{{route('home')}}" class="waves-effect">
                        <i class="fa fa-home"></i><span> Dashboard </span>
                    </a>
                </li>
                <li class="{{ request()->is('user/project*') ? 'mm-active' : '' }}">
                    <a href="{{route('user.project.index')}}" class="waves-effect {{ (request()->routeIs('user.project.index') || request()->routeIs('user.project.create') || request()->routeIs('user.project.edit')) ? 'active' : '' }}">
                        <i class="fa fa-boxes"></i><span> Project </span>
                    </a>
                </li>
                <li class="{{ request()->is('user/information*') ? 'mm-active' : '' }}">
                    <a href="{{route('user.information.index')}}" class="waves-effect {{ (request()->routeIs('user.information.index') || request()->routeIs('user.information.create') || request()->routeIs('user.information.edit')) ? 'active' : '' }}">
                        <i class="fa fa-book-open"></i><span> Data Collection </span>
                    </a>
                </li>

{{--                <li--}}
{{--                    class="{{ request()->is('admin/users*') ? 'mm-active' : '' }}">--}}
{{--                    <a href="javascript: void(0);"--}}
{{--                       class="has-arrow waves-effect {{ request()->is('admin/users*') ? 'mm-active' : '' }}">--}}
{{--                        <i class="fas fa-users"></i>--}}
{{--                        <span>Administration</span>--}}
{{--                    </a>--}}
{{--                    <ul class="sub-menu" aria-expanded="true">--}}
{{--                        <li class="{{ request()->is('admin/users*') ? 'mm-active' : '' }}">--}}
{{--                            <a href="{{ route('admin.users.index') }}"--}}
{{--                               class="{{ request()->routeIs('admin.users.index') ? 'active' : '' }}">--}}
{{--                                Users--}}
{{--                            </a>--}}
{{--                        </li>--}}

{{--                        --}}{{--                            <li class="{{ request()->is('admin/mentors*') ? 'mm-active' : '' }}">--}}
{{--                        --}}{{--                                <a href="{{ route('admin.mentors.index') }}"--}}
{{--                        --}}{{--                                   class="{{ (request()->routeIs('admin.mentors.index') || request()->routeIs('admin.mentors.create') || request()->routeIs('admin.mentors.edit')) ? 'active' : '' }}">--}}
{{--                        --}}{{--                                    Mentor--}}
{{--                        --}}{{--                                </a>--}}
{{--                        --}}{{--                            </li>--}}
{{--                    </ul>--}}
{{--                </li>--}}

            </ul>
        </div>
        <!-- Sidebar -->
    </div>
</div>
